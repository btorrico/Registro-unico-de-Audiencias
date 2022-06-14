import { ResultadosService } from './resultados/resultados.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisibilidadSearchService } from './visibilidad/visibilidad-search.service';
import { Resultado } from './resultados/resultado';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.Default // OnPush
})
export class SearchComponent implements OnInit {

  estaVisible : boolean; //atributo para permitir que un componente este veisible o no
  busqueda: string|null; // atributo para hacer la busqueda
  resultado: Resultado|null;

  constructor(
    private visibilidadService: VisibilidadSearchService,// INYECTA la instancia de visivilidadService
       // esta inyeccion permite conectar el servicio de visivilidadService con este componente

   private resultadosService: ResultadosService,
   private router: Router
    ) {

    this.estaVisible = false; // inicializa el atributo estaVisible por defecto como false
    this.busqueda = null;
    this.resultado =null;
  }

  ngOnInit(): void { // es el metodo que se llama inicialmente despues de instanciar el objeto con el constructor, cuando el componenete esta naciendo
    // Todas las inicializaciones mas complejas o importantes se hacen en ESTE METODO

    this.visibilidadService.cambioDeVisibilidad.subscribe((estaVisible:boolean) =>
     { console.log("papas");
      this.estaVisible= estaVisible;}); // Esta clase se suscribe a las notificaciones del EvenEmitter
    //cada vez que se cambie el estado de estaVisible me avisa

    this.resultadosService.cambioDeResultado.subscribe((nuevoResultado: Resultado) =>
     {this.resultado = nuevoResultado;});

  }

  public buscar(){
    this.router.routeReuseStrategy.shouldReuseRoute= () => false; // Mata al componente y vuelve a instanciar el componente para lograr ver lo que estamos buscando cuando le damos click al boton de buscar, nos sirve para volver a instanciar la segunda busqueda
    this.router.navigate(['/audiencias'], {queryParams:{busqueda: this.busqueda }}); // recibe un array para dirigirse a /audiencias
     // segundo parametro del navigate acepta queryParams que tiene una key(busqueda) y un valor que lo pasa en la barra de busqueda del navegador
  }

}
