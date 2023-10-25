import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { EventListenerObject } from 'rxjs/internal/observable/fromEvent';
import { Usuario } from 'src/app/Interfaces/usuario';
import { Puntas } from 'src/app/Interfaces/puntas';
import { Titulo } from 'src/app/Interfaces/titulo';
import { CompraDTO } from 'src/app/Interfaces/compra-dto';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-form-compra-accion',
  templateUrl: './form-compra-accion.component.html',
  styleUrls: ['./form-compra-accion.component.scss']
})
export class FormCompraAccionComponent implements OnInit {
  datos: any;
  puntas: Puntas = { cantidadCompra: 0, precioCompra: 0, precioVenta: 0, cantidadVenta: 0 };
  accionSelec: Titulo = { simbolo: "", puntas: { cantidadCompra: 0, precioCompra: 0, precioVenta: 0, cantidadVenta: 0 }, ultimoPrecio: 0, variacionPorcentual: 0, apertura: 0, maximo: 0, minimo: 0, ultimoCierre: 0, volumen: 0, cantidadOperaciones: 0, fecha: "", tipoOpcion: null, precioEjercicio: null, fechaVencimiento: null, mercado: "", moneda: "", descripcion: "", plazo: "", laminaMinima: 0, lote: 0 };
  comisionEstablecida:number = 0.5;
  cantidadCompra: number = 0;
  compraPost : CompraDTO = {nombre:this.accionSelec.descripcion,simbolo:this.accionSelec.simbolo,comision:this.comisionEstablecida,cantidad: this.cantidadCompra,precio: this.accionSelec.ultimoPrecio, idCliente:999314,fecha:""}

  selectedSymbol: string = '0';
  

  monto: number = 0;
  precioFinalComision: number = 0;
  precioFinalCompra: number = 0;
  precioAccionSeleccionada: number = 0;

  compraForm: FormGroup;
  mostrarMsgError: boolean = false;
  msgError: string = "";

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private compraService: CompraService) {
      this.compraForm = this.formBuilder.group({
    nombre: [''],
    simbolo: [''],
    comision: [''],
    cantidad: [''],
    precio: [''],
    idCliente: [''],
    fecha: [''],
  });
   }
  ngOnInit(): void {
    this.http.get('assets/json/14-06-23.json').subscribe((data) => {
      this.datos = data;
    });
  }



  submitCompraForm() {
    if (this.compraForm.valid) {
      const formData = this.compraForm.value;
      console.log("sbumitCompra FormData: ",formData)

      this.compraService.registreCompra(formData).subscribe(
        (response) => {
        console.log("response",response)
        },
        (error) => {
          this.mostrarMsgError = true;
          this.msgError = 'Error al registrar: ' + error.message;
        }
      );
    }
  }





  miMetodo(event: EventListenerObject<Titulo[]>) {
    const selectedValue = event;
    for (const item of this.datos.titulos) {
      if (item === selectedValue) {
        this.accionSelec = item
        this.cantidadCompra = 0;
        this.precioFinalCompra = 0;
        return this.accionSelec;
      }
    }
    return this.accionSelec;
  }
  calcularPrecioFinal(cantidad: number) {
    this.precioFinalCompra = this.accionSelec.ultimoPrecio * cantidad;
    this.precioFinalComision = this.precioFinalCompra + ((this.precioFinalCompra / 100) * 0.5);
  }


}
