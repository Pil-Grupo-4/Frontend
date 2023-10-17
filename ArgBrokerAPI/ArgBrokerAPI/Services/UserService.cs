using ArgBrokerAPI.Models;

namespace ArgBrokerAPI.Services
{
    public interface UserService
    {
        Task<IEnumerable <Usuario>> GetAllUsers();

        Task<Usuario> GetUserById(int id);

        Task<Usuario> PostNewUser(Usuario newUser);

        Task<Usuario> UpdateUser(Usuario updatedUser);
        Task<Usuario> ValidateUserCredentials(string correo, string contraseña);
    }
}
