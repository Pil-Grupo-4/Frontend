using ArgBrokerAPI.DataSet;
using ArgBrokerAPI.Models.Entities;
using ArgBrokerAPI.Services;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;

public class CompraServiceImp : CompraService
{
    private readonly argBrokerDbContext _dbContext;
    private readonly ClienteService _clienteService;

    public CompraServiceImp(argBrokerDbContext dbContext, ClienteService clienteService)
    {
        _dbContext = dbContext;
        _clienteService = clienteService;
    }

    public async Task<List<Compra>> GetCompras(int id){
        var listaCompras = await _dbContext.Compras.Where(compra => compra.IdCliente == id).ToListAsync();
        return listaCompras;
    }

    public async Task<Compra> PostNewCompra(Compra newCompra)
    {
        using (var transaction = _dbContext.Database.BeginTransaction())
        {
            try
            {
                // Verifica si el cliente tiene suficiente dinero
                decimal dineroDelCliente = await _clienteService.GetDineroByClientId(newCompra.IdCliente);

                if (dineroDelCliente < newCompra.Precio)
                {
                    throw new Exception("El cliente no tiene suficiente dinero para realizar la compra.");
                }

                // Actualiza el campo "Dinero" del cliente
                var cliente = await _dbContext.Clientes.FindAsync(newCompra.IdCliente);

                if (cliente != null)
                {
                    cliente.Dinero -= newCompra.Precio;
                    _dbContext.Update(cliente);
                }
                else
                {
                    throw new Exception("Cliente no encontrado.");
                }

                // Registra la compra
                _dbContext.Add(newCompra);
                await _dbContext.SaveChangesAsync();

                transaction.Commit();
                return newCompra;
            }
            catch (Exception ex)
            {

                transaction.Rollback();
                throw new ApplicationException("Hubo un error al registrar la compra.", ex);
            }
        }
    }
}
    
