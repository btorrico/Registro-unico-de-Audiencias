import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiencia',
  templateUrl: './audiencia.component.html',
  styleUrls: ['./audiencia.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Cuando el componenete PADRE camcia algo, el componenete hijo tambien se entera
})
export class AudienciaComponent implements OnInit {

@Input() audiencia: any|null; // Quiere representar a un audiencia
// @Input() significa que si alguien llama a este componenete le voy a poder pasar este parametro
@Input() id: number |null; //;

constructor() {
this.id = null;

 }

  ngOnInit(): void {
  }

}
