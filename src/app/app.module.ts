import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralesModule } from './generales/generales.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaDeComponent,
    ComoFuncionaComponent,
    PerfilComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralesModule,
    FormsModule, // Sirve para los formularios
    ReactiveFormsModule  // Sirve para los formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
