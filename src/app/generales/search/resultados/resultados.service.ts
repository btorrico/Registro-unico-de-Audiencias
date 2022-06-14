import { Injectable, Output, EventEmitter } from '@angular/core';
import { Resultado } from './resultado';

// ESte servicio se genera para poder mostrar la cantidad de resultados obtenidos desde el Back end
@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  @Output() cambioDeResultado: EventEmitter<Resultado>;

  constructor() {
    this.cambioDeResultado = new EventEmitter();
   }

   //Metodo para comunicarse con listado component
   public notificarCambioDeResultado(nuevoResultado: Resultado){
    this.cambioDeResultado.emit(nuevoResultado);
   }
}

