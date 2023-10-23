using ArgBrokerAPI.Models.Entities;
using ArgBrokerAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ArgBrokerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : Controller
    {
        private readonly ClienteService _clienteService;
        public ClienteController(ClienteService clienteService)
        {
            _clienteService = clienteService;
        }
        // POST api/<UsuarioController>
        [HttpPost]
        public async Task<ActionResult<Cliente>> PostClient([FromBody] Cliente newClient)
        {
            try
            {
                var postUser = await _clienteService.RegisterNewClient(newClient);
                return postUser;
            }
            catch (Exception ex)
            {
                return BadRequest($"Hubo un error al crear el cliente: {ex.Message}");

            }

        }
    }
}
