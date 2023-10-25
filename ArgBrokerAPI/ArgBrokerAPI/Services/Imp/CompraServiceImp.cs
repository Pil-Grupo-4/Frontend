using ArgBrokerAPI.DataSet;
using ArgBrokerAPI.Models;
using ArgBrokerAPI.Models.DTOs;
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

    public async Task<Compra> PostNewCompra(CompraPostDTO newCompra)
    {
        using (var transaction = _dbContext.Database.BeginTransaction())
        {
            try
            {
                Cliente clienteComprador = new Cliente();
                clienteComprador = await _clienteService.GetClienteById(newCompra.idCliente);

                if (clienteComprador == null)
                {
                    // Lanza una excepción de API con el código de estado 404 (Not Found)
                    throw new ErrorApi(404, "Cliente no encontrado.");
                }

                if (clienteComprador.Dinero < newCompra.Precio)
                {
                    // Lanza una excepción de API con el código de estado 400 (Bad Request)
                    throw new ErrorApi(400, "El cliente no tiene suficiente dinero para realizar la compra.");
                }

                clienteComprador.Dinero -= newCompra.Precio;
                _dbContext.Update(clienteComprador);

                Compra compra = new Compra
                {
                    IdCompra = 0,
                    Nombre = newCompra.Nombre,
                    Simbolo = newCompra.Simbolo,
                    Comision = newCompra.Comision,
                    Precio = newCompra.Precio,
                    Fecha = newCompra.Fecha,
                    Cliente = clienteComprador,
                    Cantidad = newCompra.Cantidad,
                };

                _dbContext.Add(compra);
                await _dbContext.SaveChangesAsync();

                transaction.Commit();
                return compra;
            }
            catch (ErrorApi)
            {
                // La excepción de API ya contiene el código de estado y el contenido
                throw;
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                // Lanza una excepción de API con el código de estado 500 (Internal Server Error)
                throw new ErrorApi(500, "Hubo un error al registrar la compra.");
            }
        }
}
}
    
