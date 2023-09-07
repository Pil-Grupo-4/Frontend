import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCompraAccionComponent } from './form-compra-accion/form-compra-accion.component';

const routes: Routes = [{
  path:'compra', component: FormCompraAccionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
