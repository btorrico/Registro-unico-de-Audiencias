import { ListadoComponent } from './listado/listado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',component: ListadoComponent} // Haca que cada vez que se quiera acceder con el path vacio va a ir a buscarlo en ListadoComponent

];

@NgModule({
  imports: [RouterModule.forChild(routes)], // lo de app-routing.module.ts lo busca aca
  exports: [RouterModule]
})
export class AudienciasRoutingModule { }
