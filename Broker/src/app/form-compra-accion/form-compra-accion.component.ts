import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-form-compra-accion',
  templateUrl: './form-compra-accion.component.html',
  styleUrls: ['./form-compra-accion.component.scss']
})
export class FormCompraAccionComponent{
/*   datosJson: any
  constructor(private httpClient: HttpClient){
    
  }
  ngOnInit(): void {
    this.httpClient.get('../../assets/json/06-07-23.json').subscribe(data => {
      // Asigna los datos JSON a una propiedad de tu componente
      this.datosJson = data;
    });
  }
   */
}
