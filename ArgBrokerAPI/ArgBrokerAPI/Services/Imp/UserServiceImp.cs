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

        public async Task<Usuario> PutUser(Usuario user, int id)
        {
            try
            {
                var userToUpdate = await _dbContext.Usuarios.FindAsync(id);

                if (userToUpdate != null)
                {
                    userToUpdate.IdUsuario = id;
                    userToUpdate.Nombre = user.Nombre;
                    userToUpdate.Apellido = user.Apellido;
                    userToUpdate.Dni = user.Dni;
                    userToUpdate.Correo = user.Correo;
                    userToUpdate.Nacimiento = user.Nacimiento;
                    userToUpdate.Contraseña = user.Contraseña;
                    userToUpdate.Telefono = user.Telefono;
                }
                else
                {
                    throw new ApplicationException("No se encontro el usuario.");
                }
                _dbContext.Usuarios.Update(userToUpdate);
                await _dbContext.SaveChangesAsync();
                return user;
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Hubo un error al actualizar el usuario.", ex);
            }
        }
    }
}
