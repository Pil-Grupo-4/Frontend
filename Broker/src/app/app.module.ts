import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCompraAccionComponent } from './form-compra-accion/form-compra-accion.component';
import { CustomInputDirective } from './form-compra-accion/custom-input.directive';
import { CustomInput2Directive } from './form-compra-accion/custom-input-2.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormCompraAccionComponent,
    CustomInputDirective,
    CustomInput2Directive,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
