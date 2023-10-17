using ArgBrokerAPI.Models;
using ArgBrokerAPI.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ArgBrokerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UserService _userService;

        public UsuarioController(UserService userService)
        {
            _userService = userService;
        }

        // GET: api/<UsuarioController>
        [HttpGet]
        public async Task<IActionResult>GetAllUsers()
        {
           var UsersList = await _userService.GetAllUsers();
            return Ok(UsersList);
        }

        

        // GET api/<UsuarioController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult>Get(int id)
        {
            var UsersList = await _userService.GetUserById(id);
            return Ok(User);
        }

        // POST api/<UsuarioController>
        [HttpPost]
        public async Task<ActionResult<Usuario>> PostUser([FromBody] Usuario newUser)
        {
            var postUser = await _userService.PostNewUser(newUser);
            return postUser;  //este llama al metodo GetUser y nos devuelve el usuario recien creado
        }
        // PUT api/<UsuarioController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, [FromBody] Usuario updatedUser)
        {
            try
            {
                var updated = await _userService.UpdateUser(updatedUser);
                return Ok(updated);
            }
            catch (Exception ex)
            {
                return BadRequest($"Hubo un error al actualizar el usuario: {ex.Message}");
            }
        }

        [HttpGet("login")]
        public async Task<IActionResult> Login(string correo, string contraseña)
        {
            try
            {
                // Aquí debes implementar la lógica para verificar las credenciales.
                // Puedes llamar a un método de servicio que verifique si el correo y la contraseña son válidos.
                var user = await _userService.ValidateUserCredentials(correo, contraseña);

                if (user != null)
                {
                    // Devuelve el usuario como parte de la respuesta
                    return Ok(user);
                }
                else
                {
                    return BadRequest("Credenciales incorrectas");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Hubo un error en el inicio de sesión: {ex.Message}");
            }
        }

    }
}
