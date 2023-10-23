using ArgBrokerAPI.DataSet;
using ArgBrokerAPI.Models.Entities;
using ArgBrokerAPI.Services;
using Microsoft.EntityFrameworkCore;

public class ClienteServiceImp : ClienteService
{
    private readonly argBrokerDbContext _dbContext;
    private readonly UserService userService;

    public ClienteServiceImp(argBrokerDbContext dbContext, UserService userService)
    {
        _dbContext = dbContext;
        this.userService = userService;
    }

    public async Task<decimal> GetDineroByClientId(int idCliente)
    {
        try
        {
            var cliente = await _dbContext.Clientes.FirstOrDefaultAsync(c => c.IdCliente == idCliente);

            if (cliente != null)
            {
                return cliente.Dinero;
            }
            else
            {
                throw new Exception("Cliente no encontrado");
            }
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    public async Task<Cliente> RegisterNewClient(Cliente newCliente)
    {
        try
        {
            Usuario userInserted = await userService.PostNewUser(newCliente.Usuario);

            var newClient = new Cliente
            {
                Dinero = 1000000,
                Usuario = userInserted 
            };

            _dbContext.Add(newClient);
            await _dbContext.SaveChangesAsync();

            return newClient;
        }
        catch (Exception ex)
        {
            throw new ApplicationException("Hubo un error al crear el cliente.", ex);
        }
    }

}