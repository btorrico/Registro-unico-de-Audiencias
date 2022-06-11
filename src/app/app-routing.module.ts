import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './generales/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';

//Seccion para agregar las rutas
const routes: Routes = [
  { path: '', component: InicioComponent }, // en path va /inicio , definia la ruta despues del localhost
  { path: "acerca-de",component: AcercaDeComponent }, // se agrega la ruta y en el segundo parametro se indica que "acerca-de" va a ir a parar a AcercaDeComponent
  { path: "como-funciona",component: ComoFuncionaComponent },
  { path: '**', component: PaginaNoEncontradaComponent }, // El PAgina no encontrada siempre va ultimo ya que solo tiene que dirigirse ahi si no encuentra la ruta
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
