import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from 'src/app/user.service';

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

  constructor(private httpClient: HttpClient) {} // Importa HttpClient

  enviarFormulario() {
    if (this.formLogin.valid) {
      const loginData = this.formLogin.value;

      // Asegúrate de que los valores no sean undefined antes de construir los parámetros de ruta
      const params = new HttpParams()
        .set('correo', loginData.email || '')
        .set('contraseña', loginData.password || '');

      // Realiza una solicitud GET al endpoint de inicio de sesión con los parámetros de ruta
      this.httpClient.get('https://localhost:7037/api/Usuario/login', { params: params }).subscribe(
        (response: any) => {
          console.log(response)
          // Maneja la respuesta del servidor, por ejemplo, redirige al usuario o muestra un mensaje de éxito.
          alert('Login exitoso');
        },
        (error) => {
          // Maneja errores, por ejemplo, muestra un mensaje de error y registra el error en la consola.
          console.error('Error en el inicio de sesión:', error);
        }
      );
    }
  }
}
