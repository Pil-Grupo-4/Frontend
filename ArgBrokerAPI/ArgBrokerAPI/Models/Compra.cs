using System;
using System.ComponentModel.DataAnnotations;

namespace ArgBrokerAPI.Models
{
    public class Compra
    {
        [Key]
        public int IdCompra { get; set; }
        public int IdCliente { get; set; }
        public int IdAccion { get; set; }
        public int Comision { get; set; }
        public double Cantidad { get; set; }
        public decimal Precio { get; set; }
        public DateTime Fecha { get; set; }

        public Cliente Cliente { get; set; }
        public Accion Accion { get; set; }
    }

}
