import { Component, OnInit } from '@angular/core';
import { VisibilidadSearchService } from '../generales/search/visibilidad/visibilidad-search.service';
import { MainIdService } from '../main-service/main-id.service';

@Component({
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(
   private mainServiceId: MainIdService,
   private visibilidadBusquedaService: VisibilidadSearchService
  ) { }

  ngOnInit(): void {
    this.mainServiceId.setearAboutId(); // hace que el id cambie a about en la pagina "acerca de"
    this.visibilidadBusquedaService.ocultarBarraDeBusqueda();
  }

}
