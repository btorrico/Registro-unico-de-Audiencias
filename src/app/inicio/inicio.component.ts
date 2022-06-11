import { MainIdService } from './../main-service/main-id.service';
import { Component, OnInit } from '@angular/core';
import { VisibilidadSearchService } from '../generales/search/visibilidad/visibilidad-search.service';


@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
estructuraDelPoderEjecutivoNacional = [
  {idBusqueda: 30, nombre: 'Presidencia de la Nacion', id: 1179},
  {idBusqueda: 3132, nombre: 'Ministerio de Educacion', id: 559},
  {idBusqueda: 3156, nombre: 'Ministerio de Desarrolllo Territorial y Habitat', id: 519},
  {idBusqueda: 3115, nombre: 'Jefatura de Gabinete de Mnistros', id: 437},
]
  constructor(
    private visibilidadSearchService : VisibilidadSearchService, // Se instancia
    //Lp queremos instanciado en este este componenete ya que queremos que la parte del search
    //sea visible junto con el componente de inicio

    private mainIdService: MainIdService

  ) { }

  ngOnInit(): void {
    this.visibilidadSearchService.hacerVisibleBarraDeBusqueda(); //Llama desde aca al atributo de la visibilidad para cambiar a true o false
    this.mainIdService.setearSearcherId();
  }

}
