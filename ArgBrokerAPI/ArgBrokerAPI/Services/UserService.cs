using ArgBrokerAPI.Models;

namespace ArgBrokerAPI.Services
{
    public interface UserService
    {
        Task<IEnumerable <Usuario>> GetAllUsers();
        Task<Usuario> PostNewUser(Usuario newUser);
        Task<Usuario> PutUser(Usuario user, int id);
    }
}
