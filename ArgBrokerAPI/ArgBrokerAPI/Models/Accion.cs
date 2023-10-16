using System.ComponentModel.DataAnnotations;

namespace ArgBrokerAPI.Models
{
    public class Accion
    {
        [Key] 
        public int IdAccion { get; set; }
        public string Simbolo { get; set; }
        public string Descripcion { get; set; }
        public decimal UltimoPrecio { get; set; }
        public int Cantidad { get; set; }
    }
}
