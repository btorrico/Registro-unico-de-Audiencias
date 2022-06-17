import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  formulario: FormGroup|null;
  constructor(
    private formBuilder: FormBuilder // Patron de diseño Builder
  ) {
    this.formulario = null;
   }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario(){
    this.formulario = this.formBuilder.group({
      nombre: ['',Validators.required], // Este formulario tiene un campo nombre, valor por defencto vacio y es required (obligatorio)
      apellido: ['',Validators.required]
    });
  }
  private recuperarUsuarioSiEsPosible(){

    const nombre = localStorage.getItem('nombre');
    const apellido = localStorage.getItem('apellido');

    this.formulario?.controls['nombre'].setValue(nombre != null? nombre : ''); // set value dice que si nombre es distinto de null le setea las comillas vacias
    this.formulario?.controls['apellido'].setValue(apellido != null? nombre : '');
  }

  guardar(){
    alert('Se han guardado los cambios');

    var nombre = this.formulario?.get('nombre')?.value; // Se recupera lo que se ingresa por pantalla en el formulario
    var apellido = this.formulario?.get('apellido')?.value; // Se recupera lo que se ingresa por pantalla en el formulario

     console.log(nombre + " " + apellido); // Muestra por la consola el nombre y apellido ingresados por el formulario

      localStorage.setItem('nombre',nombre); // LocalStorage es un espacio en el navegador que permite guardar los datos
      localStorage.setItem('apellido', apellido); // SIRVE PARA GUARDAR LOS DATOS DEL USUARIO LOGUEADO

      console.log(nombre + " " + apellido); //
    }


      private formularioEsValido(){
        return this.formulario?.invalid;
      }
      campoInvalido(campo: string){
        return this.formulario?.get(campo)?.invalid;
      }
}
