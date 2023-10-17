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

        public async Task<Usuario> GetUserById(int id)
        {
            try
            {
                var user = await _dbContext.Usuarios.FindAsync(id);
                return user;
            }
            catch (Exception ex)
            {
                throw new ApplicationException("No existe un usuario con ese id", ex);
            }
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

        public async Task<Usuario> UpdateUser(Usuario updatedUser)
        {
            try
            {
                var existingUser = await _dbContext.Usuarios.FindAsync(updatedUser.IdUsuario);

                if (existingUser == null)
                {
                    // Maneja el caso en el que el usuario no existe
                    throw new ApplicationException("Usuario no encontrado");
                }

                // Copia las propiedades actualizadas al usuario existente
                _dbContext.Entry(existingUser).CurrentValues.SetValues(updatedUser);
                await _dbContext.SaveChangesAsync();
                return existingUser;
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Hubo un error al actualizar el usuario.", ex);
            }
        }

        public async Task<Usuario> ValidateUserCredentials(string correo, string contraseña)
        {
            try
            {
                // Busca un usuario con el correo proporcionado en la base de datos
                var user = await _dbContext.Usuarios.FirstOrDefaultAsync(u => u.Correo == correo);

                // Verifica si se encontró un usuario con ese correo
                if (user == null)
                {
                    return null; // El usuario no existe
                }

                // Ahora, debes verificar si la contraseña proporcionada coincide con la contraseña almacenada
                if (user.Contraseña == contraseña)
                {
                    return user; // Las credenciales son válidas
                }
                else
                {
                    return null; // Contraseña incorrecta
                }
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Hubo un error al validar las credenciales del usuario.", ex);
            }
        }
    }
}
