import { MainIdService } from './../main-service/main-id.service';
import { Component, OnInit } from '@angular/core';
import { VisibilidadSearchService } from '../generales/search/visibilidad/visibilidad-search.service';

@Component({
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.css']
})
export class ComoFuncionaComponent implements OnInit {

  constructor(
    private mainServiceId: MainIdService,
    private visibilidadBusquedaService : VisibilidadSearchService
  ) { }

  ngOnInit(): void {
    this.mainServiceId.setearAboutId();
    this.visibilidadBusquedaService.ocultarBarraDeBusqueda();
  }

}
