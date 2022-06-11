import { EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadSearchService {

    private busquedaEstaVisible: boolean;

@Output() cambioDeVisibilidad: EventEmitter<boolean>; //Se usa patron de diseño observer!!!

//EvenEmitter permite utilizar el atributo de busquedaEstaVisible por otros componentes y enviar mensajes

  constructor() {
    this.cambioDeVisibilidad = new EventEmitter(); // Inicializa EvenEmitter
    this.busquedaEstaVisible = false;
  }

  public hacerVisibleBarraDeBusqueda(){
    this.busquedaEstaVisible = true;
    this.notificarCambio(); // Cambia el estado a true del atriibuto y notifica el cambio
  }

  public ocultarBarraDeBusqueda(){
    this.busquedaEstaVisible = false;
    this.notificarCambio(); // Cambia el estado a true del atriibuto y notifica el cambio

  }
  private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.busquedaEstaVisible); //emit permitie emitir un evento a todos aquellos que esten pendientes de ese atributo
    //tienen que estar susbcritos (subscribe)
  }
}
