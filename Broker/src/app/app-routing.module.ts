import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormCompraAccionComponent } from './form-compra-accion/form-compra-accion.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path:'compra', component: FormCompraAccionComponent},
  {path:'cotizaciones', component: CotizacionesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
