import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { LandingComponent } from './components/landing/landing.component';

import { FormCompraAccionComponent } from './components/form-compra-accion/form-compra-accion.component';
import { CustomInputDirective } from './components/form-compra-accion/custom-input.directive';
import { CustomInput2Directive } from './components/form-compra-accion/custom-input-2.directive';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FormCompraAccionComponent,
    CustomInputDirective,
    CustomInput2Directive,
    CotizacionesComponent,
    AboutUsComponent
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
