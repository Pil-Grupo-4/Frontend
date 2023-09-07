import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormCompraAccionComponent } from './form-compra-accion/form-compra-accion.component';
import { CustomInputDirective } from './form-compra-accion/custom-input.directive';
import { CustomInput2Directive } from './form-compra-accion/custom-input-2.directive';
import { HttpClientModule } from '@angular/common/http';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FormCompraAccionComponent,
    CustomInputDirective,
    CustomInput2Directive,
    CotizacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
