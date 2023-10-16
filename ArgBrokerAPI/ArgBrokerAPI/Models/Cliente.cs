using System.ComponentModel.DataAnnotations;

namespace ArgBrokerAPI.Models
{
    public class Cliente
    {
        [Key]
        public int IdCliente { get; set; }
        public int IdUsuario { get; set; }

        public Usuario Usuario { get; set; }
    }
}
