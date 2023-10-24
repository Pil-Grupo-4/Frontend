import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  mostrarMsgError: boolean = false;
  msgError: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService 
  ) {}
  formLogin = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  

  enviarFormulario() {
    if (this.formLogin.valid) {
      const formData = this.formLogin.value;
      console.log(this.loginService.login(formData))  //borrar 

      this.loginService.login(formData).subscribe(
        (response) => {
          this.router.navigate(['/dashboard']);
          console.log("redirige");

        },
        (error) => {
          this.mostrarMsgError = true;
          this.msgError = 'Error al registrar: ' + error.message;
        }
      );
    }
  }
}
