using ArgBrokerAPI.DataSet;
using ArgBrokerAPI.Models.DTOs;
using ArgBrokerAPI.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace ArgBrokerAPI.Services.Imp
{
    public class UserServiceImp : UserService
    {
        private readonly argBrokerDbContext _dbContext;
  

        public UserServiceImp(argBrokerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Usuario>> GetAllUsers()
        {
            var UserList = await _dbContext.Usuarios.ToListAsync();
            return UserList;

        }

        public async Task<Usuario> PostNewUser(Usuario newUser)
        {
            try
            {
                _dbContext.Add(newUser);
                await _dbContext.SaveChangesAsync();
                return newUser;
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Hubo un error al crear el usuario.", ex);
            }
        }

        public async Task<Usuario> LogginUser(UsuarioLoginDTO logUser)
        {
            try
            {
                Usuario user = _dbContext.Usuarios.FirstOrDefault(u => u.Correo == logUser.Correo);

                if (user == null || logUser.Contraseña != user.Contraseña)
                {
                    // Si el usuario no existe o la contraseña no coincide, lanza una excepción.
                    throw new Exception("Credenciales incorrectas");
                }

                return user;
            }
            catch (Exception ex)
            {
                throw;
            }
        }


    }
}
