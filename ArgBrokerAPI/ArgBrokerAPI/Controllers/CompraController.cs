using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ArgBrokerAPI.DataSet;
using ArgBrokerAPI.Services;
using ArgBrokerAPI.Models.Entities;

namespace ArgBrokerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompraController : Controller
    {
        private readonly CompraService _compraService;

        public CompraController(CompraService compraService)
        {
            _compraService = compraService ;
        }


     /*   // GET: api/<CompraController>
        [HttpGet]
        public async Task<IActionResult> GetAllCompras()
        {
            var UsersList = await _compraService.GetAllCompras();
            return Ok(UsersList);
        }
     */
        // GET api/<CompraController>/5
        [HttpGet("{id}")]
        public string GetAllCompras(int id)
        {
            return "value";
        }

        [HttpGet("ComprasByClient/{clientid}")]
        public async Task<ActionResult<List<Compra>>> GetCompras(int clientid)
        {
            return await _compraService.GetCompras(clientid);
        }

        // POST api/<CompraController>
        [HttpPost("registro-compra")]
        public async Task<ActionResult<Compra>> PostUser([FromBody] Compra newCompra)
        {
            try
            {
                var postCompra = await _compraService.PostNewCompra(newCompra);
                return postCompra;
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // PUT api/<UsuarioController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

    }
}
