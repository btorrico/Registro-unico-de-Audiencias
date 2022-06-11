import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { VisibilidadSearchService } from './visibilidad/visibilidad-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.Default // OnPush
})
export class SearchComponent implements OnInit {

  estaVisible : boolean; //atributo para permitir que un componente este veisible o no

  constructor(
    private visibilidadService: VisibilidadSearchService) { // INYECTA la instancia de visivilidadService
   // esta inyeccion permite conectar el servicio de visivilidadService con este componente

    this.estaVisible = false; // inicializa el atributo estaVisible por defecto como false
  }

  ngOnInit(): void { // es el metodo que se llama inicialmente despues de instanciar el objeto con el constructor, cuando el componenete esta naciendo
    // Todas las inicializaciones mas complejas o importantes se hacen en ESTE METODO

    this.visibilidadService.cambioDeVisibilidad.subscribe((estaVisible:boolean) =>
     {this.estaVisible= estaVisible;}); // Esta clase se suscribe a las notificaciones del EvenEmitter
    //cada vez que se cambie el estado de estaVisible me avisa
  }



}
