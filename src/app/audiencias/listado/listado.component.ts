import { AudienciaComponent } from './../audiencia/audiencia.component';
import { HorarioService } from './../../generales/horarios/horario.service';
import { ResultadosService } from './../../generales/search/resultados/resultados.service';
import { MainIdService } from './../../main-service/main-id.service';
import { VisibilidadSearchService } from './../../generales/search/visibilidad/visibilidad-search.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
busqueda: string;
audienciaEjemplo: any;
audiencias: any;
@ViewChild('containerAudiencias', { read:ViewContainerRef}) containerDeAudiencias : ViewContainerRef|undefined;// Algo que contiene referencias a otros componenetes - contenedor de referencias
private referenciasAComponenetesDeAudiencias : any;

  constructor(
    private visibilidadBarraBusquedaService: VisibilidadSearchService,
    private mainIdService: MainIdService,
    private resultadosService: ResultadosService,
    private horarioService: HorarioService,
    private ruta: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    console.log('constructor de Listado'); // Muestra en el Dom cuando se instancia el componenete, no sirve para mucho
    this.busqueda = "";
    this.audiencias = []; // Inicializo audiencias
  }

  ngOnInit(): void {
    this.visibilidadBarraBusquedaService.hacerVisibleBarraDeBusqueda();
    this.mainIdService.setearSearcherId();
   // this.ruta.snapshot.queryParamMap.get('busqueda'); ALTERNATIVA
    this.busqueda = this.ruta.snapshot.queryParams != null ? this.ruta.snapshot.queryParams['busqueda'] : "" ;
    // Si las query params son distintas de null entonces quiero asignarle a mi atributo de busqueda: los que haya en el value de la key busqueda y si es nulo le asigno " " comillas
    this.crearAudienciaEjemplo();
    this.buscar();
  }


private crearAudienciaEjemplo(){
  this.audienciaEjemplo = {
    sujetoObligado: {
      nombre: 'Alberto Ángel',
      apellido: 'Fernandéz',
      dni: '1234568',
      cargo: 'Presidente',
      dependeciaEstatal: 'Presidencia de la Nación'
    },
    solicitante: {
      nombreCompleto: 'Catalano Daniel Adolfo',
      dni:'',
      tipoRepresentacion: 'Persona Juridica',
      nacionalidad: 'Argentina',
      cargo: 'Secretario general de la Asociacion de Trabajadores ',
      entidad: '',
      cuit: ''
    },
    fecha: '15/06/22',
    hora: '17:00',
    tipoInteres: 'Colectivo',
    motivo: 'Agenda sindical'


  }
  const otraAudiencia = { // Inicializa otra audiencia con el mismo formato de datos
    sujetoObligado: {
      nombre: 'Alberto Ángel',
      apellido: 'Fernandéz',
      dni: '1234568',
      cargo: 'Presidente',
      dependeciaEstatal: 'Presidencia de la Nación'
    },
    solicitante: {
      nombreCompleto: 'Catalano Daniel Adolfo',
      dni:'123445',
      tipoRepresentacion: 'Persona Juridica',
      nacionalidad: 'Argentina',
      cargo: 'Secretario general de la Asociacion de Trabajadores del Estado de Capital Federal ',
      entidad: 'TRABAJADORES DEL ESTADO ATE',
      cuit: '30530013576'
    },
    fecha: '15/06/22',
    hora: '17:00',
    tipoInteres: 'Colectivo',
    motivo: 'Agenda sindical'

  };

  this.audiencias.push(this.audienciaEjemplo);
  this.audiencias.push(otraAudiencia);
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
//Permite guardar los componenetes en una coleccion
  private mostrarResultados(){
      this.audiencias.forEach((audiencia: any) => {
        const audienciaComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AudienciaComponent);
        const audienciaComponent = this.containerDeAudiencias?.createComponent(audienciaComponentFactory);

        if(audienciaComponent != null){
          audienciaComponent.instance.audiencia= audiencia;
          audienciaComponent.instance.id = this.referenciasAComponenetesDeAudiencias.length; // Busca el id del componenete que se quiere corra
        }
        this.referenciasAComponenetesDeAudiencias.push(audienciaComponent);
      });
    }

    eliminarAudiencia(id: number){
      const posibleAudienciaComponent = this.referenciasAComponenetesDeAudiencias.find((c:any) => c.instance.id == id);
      if(posibleAudienciaComponent != undefined && posibleAudienciaComponent != null){
        this.containerDeAudiencias?.remove(id);
      }
    }
  }



