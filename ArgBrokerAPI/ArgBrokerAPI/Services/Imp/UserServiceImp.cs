using ArgBrokerAPI.DataSet;
using ArgBrokerAPI.Models;
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
            catch (Exception ex) {
                throw new ApplicationException("Hubo un error al crear el usuario.", ex);
            }



        }
    }
}
