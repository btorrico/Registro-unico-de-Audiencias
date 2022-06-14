import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private url: string = environment.apiHorarioURL; // declara un atributo para pasarle la url del archivo de environment
  constructor(
    private http: HttpClient // Nos permite hacer los get,post,put, etc
  ) { }

  public horaActual(){
    return this.http.get(this.url);
  }
}
