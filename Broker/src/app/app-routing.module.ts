import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormCompraAccionComponent } from './components/form-compra-accion/form-compra-accion.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path:'compra', component: FormCompraAccionComponent},
  {path:'cotizaciones', component: CotizacionesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'landing', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
