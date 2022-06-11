import { MainIdService } from './main-service/main-id.service';
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{ // afterViewInit es una interfaz que me obliga a tener
                                                    //un metodo que se llama ngAfterViewInit()
  title = 'Audiencias';
  idContainer: string;

  ngAfterViewInit(): void { // Pertenece al ciclo de vida del proyecto en Angular
 this.mainServiceId.cambioDeId.subscribe((id: string ) =>{
  this.idContainer = id; //Le asigna el valor del parametro que cambiamos en el ahtml app.component.html
  this.cdr.detectChanges(); //Le pide explicitamente al objeto que detecte los cambios y los muestre
  })

}


constructor(
  private mainServiceId: MainIdService, // Inyecta el servicio main service id
                                        //Lo inyecta aca ya que justamente el html de app.component
                                        //Es el que termina usando el servicio

  private cdr: ChangeDetectorRef // Objeto que detecta todos los cambios que se realizaron
                                // Avisa que hay un cambio
){
  this.idContainer = "searcher"; //declara el searcher
}
}
