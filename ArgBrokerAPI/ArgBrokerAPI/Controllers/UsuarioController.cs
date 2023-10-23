using ArgBrokerAPI.Models;
using ArgBrokerAPI.Models.DTOs;
using ArgBrokerAPI.Services;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Plugins;

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

        [HttpPost("usuario/login")]
        public async Task<IActionResult> LogUser(UsuarioLoginDTO userLoginDto)
        {
            try
            {
                var user = await _userService.LogginUser(userLoginDto);
                return Ok(user);
            }
            catch (Exception ex) { 
                return BadRequest(ex.Message);
            }
        }

    }
}
