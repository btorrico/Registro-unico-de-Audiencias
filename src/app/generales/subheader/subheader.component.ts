import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheaderComponent implements OnInit {

  constructor(
    router: Router // Es un servicio que se inyecta para poder usarlo en el html subheader.componet
                   // permite a traves de routerLink direccionar a "acerca de" a traves del boton
  ) { }

  ngOnInit(): void {
  }

}
