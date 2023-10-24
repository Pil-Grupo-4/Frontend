import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EventListenerObject } from 'rxjs/internal/observable/fromEvent';
import { Usuario } from 'src/app/Interfaces/usuario';
import { Puntas } from 'src/app/Interfaces/puntas';
import { Titulo } from 'src/app/Interfaces/titulo'; 

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
  selectedItem: object;

  precioAccionSeleccionada: number=0;
  puntas:Puntas= {    cantidadCompra: 0,precioCompra: 0, precioVenta: 0,cantidadVenta: 0};
  accionSelec: Titulo = { simbolo: "", puntas: { cantidadCompra: 0, precioCompra: 0, precioVenta: 0, cantidadVenta: 0 }, ultimoPrecio: 0, variacionPorcentual: 0, apertura: 0, maximo: 0, minimo: 0, ultimoCierre: 0, volumen: 0, cantidadOperaciones: 0, fecha: "", tipoOpcion: null, precioEjercicio: null, fechaVencimiento: null, mercado: "", moneda: "", descripcion: "", plazo: "", laminaMinima: 0, lote: 0 };




  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get('assets/json/14-06-23.json').subscribe((data) => {
      this.datos = data;
    });
  }

miMetodo(event: EventListenerObject<Titulo[]>) {
    const selectedValue = event;

    for (const item of this.datos.titulos) {
      if (item === selectedValue) {
        this.selectedItem = item
        this.accionSelec = item 
        return this.selectedItem;
      }
  }
  return this.selectedItem;
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
