import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private url: string = environment.apiHorarioURL;
  // declara un atributo para pasarle la url del archivo de environment que fue definida en los archivos environment.prod.ts y environment.ts

  constructor(
    private http: HttpClient //Inyeccion de dependencia que Nos permite hacer los get,post,put, etc
     // private http: HttpClient  ---> Objeto http que instancia la clase HttpClient
    ) { }

  public horaActual(){
    return this.http.get(this.url);
    // Invoca la url del atributo url, despues de esto vamos a la carpeta environment
    //funciona de forma asincronica devolviendo un observableasi que tenemos que suscribirnos
    //para obtener el resultado
  }
}
