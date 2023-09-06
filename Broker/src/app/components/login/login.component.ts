import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  


  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  enviarFormulario() {
    if (this.formLogin.valid) {
      //SENTENCIA PARA ENVIAR EL FORMULARIO, DESPUES EN EL BACK SE COMPRUEBA SI EXISTE EL USUARIO
      alert('Login exitoso');
    }
    else{
      alert('Error en el login');
    }
  }

}


