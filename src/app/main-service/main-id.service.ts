import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})      // Este servicio permite cambiar la palabra searcher o about dependiendo de que estilos
        //necesitemos en app.component.html
export class MainIdService {
  private id: string;
  @Output() cambioDeId: EventEmitter<string>;

  constructor() {
 this.id = "searcher";
 this.cambioDeId = new EventEmitter();
}

public getIdDefault(){ //Devuelve por defecto la palabra "searcher"s
  return "searcher"; // o return this.id; es lo mismo
}

public setearAboutId(){
  this.id = "about"; // setea "about" para darle el estilo correspondiente de la clase about
  this.notificarCambios();
}

public setearSearcherId(){ // setea "searche" para darle el estilo correspondiente de la clase searcher en css
  this.id="searcher";
  this.notificarCambios();
}

private notificarCambios(){
  this.cambioDeId.emit(this.id);
}
}
