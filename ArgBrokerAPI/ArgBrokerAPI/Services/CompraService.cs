using ArgBrokerAPI.Models.Entities;

namespace ArgBrokerAPI.Services
{
    public interface CompraService
    {

        Task<Compra> PostNewCompra(Compra compra);
    }
}
