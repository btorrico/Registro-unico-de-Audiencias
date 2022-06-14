import { HorarioService } from './../../generales/horarios/horario.service';
import { ResultadosService } from './../../generales/search/resultados/resultados.service';
import { MainIdService } from './../../main-service/main-id.service';
import { VisibilidadSearchService } from './../../generales/search/visibilidad/visibilidad-search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
busqueda: string;

  constructor(
    private visibilidadBarraBusquedaService: VisibilidadSearchService,
    private mainIdService: MainIdService,
    private resultadosService: ResultadosService,
    private horarioService: HorarioService,
    private ruta: ActivatedRoute
  ) {
    console.log('constructor de Listado'); // Muestra en el Dom cuando se instancia el componenete, no sirve para mucho
    this.busqueda = "";
  }

  ngOnInit(): void {
    this.visibilidadBarraBusquedaService.hacerVisibleBarraDeBusqueda();
    this.mainIdService.setearSearcherId();
   // this.ruta.snapshot.queryParamMap.get('busqueda'); ALTERNATIVA
    this.busqueda = this.ruta.snapshot.queryParams != null ? this.ruta.snapshot.queryParams['busqueda'] : "" ;
    // Si las query params son distintas de null entonces quiero asignarle a mi atributo de busqueda: los que haya en el value de la key busqueda y si es nulo le asigno " " comillas
    this.buscar();
  }

  private buscar(){
    //ACA dEBERIAMOS IR A UN BACKEND A BUSCAR LAS COINCIDENCIAS
    this.mostrarCantResultados();
    this.mostrarResultados();
  }

  private mostrarCantResultados(){
    this.horarioService.horaActual().subscribe((hora: any) => {
 // Me suscribo para poder hacer la request
    this.resultadosService.notificarCambioDeResultado(
      {totales:155,
      sistemaActual:155,
      sistemaAnterior:0,
      busqueda:this.busqueda,
      horario: hora // Le envia el parametro hora al que se suscribio
    });


    });


  }

  private mostrarResultados(){

  }

}
