using ArgBrokerAPI.Models.Entities;

namespace ArgBrokerAPI.Services
{
    public interface CompraService
    {
        Task<List<Compra>> GetCompras(int id);
        Task<Compra> PostNewCompra(Compra compra);
    }
}
