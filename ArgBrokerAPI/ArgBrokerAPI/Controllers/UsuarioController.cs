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
        public string Get(int id)
        {
            return "value";
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
        public void Put(int id, [FromBody] string value)
        {
        }


    }
}
