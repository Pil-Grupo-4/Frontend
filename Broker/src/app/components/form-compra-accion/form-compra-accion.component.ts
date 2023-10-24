import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Titulo {
  simbolo: string;
  // Define aquí todas las demás propiedades del objeto
}

@Component({
  selector: 'app-form-compra-accion',
  templateUrl: './form-compra-accion.component.html',
  styleUrls: ['./form-compra-accion.component.scss']
})
export class FormCompraAccionComponent implements OnInit {
  datos: any;
  selectedSymbol: string = '0'; // Valor por defecto para el símbolo
  selectedRadio: number = 1; // Valor por defecto para el radio (Cantidad)
  cantidad: number = 0; // Cantidad de acciones
  monto: number = 0; // Monto calculado
  precioAccion: number = 0; // Precio de la acción seleccionada
  selectedItem: any;

  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/json/14-06-23.json').subscribe((data) => {
      this.datos = data;
    });
  }

  miMetodo(event: Event) {
    // Obtén el valor seleccionado
    const selectedValue = (event.target as HTMLSelectElement).value;
  
    // Encuentra el objeto correspondiente en el arreglo titulos
    this.selectedItem = this.datos.titulos.find(item => item.simbolo === selectedValue);
  
    console.log('Elemento seleccionado:', this.selectedItem);
  }


  calcularMonto() {
    if (this.cantidad > 0 && this.precioAccion > 0) {
      this.monto = this.cantidad * this.precioAccion;
    } else {
      this.monto = 0;
    }
  }
  
  calcularCantidad() {
    if (this.monto > 0 && this.precioAccion > 0) {
      this.cantidad = this.monto / this.precioAccion;
    } else {
      this.cantidad = 0;
    }
  }
}
