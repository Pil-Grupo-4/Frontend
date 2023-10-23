import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://localhost:7037/api/Usuario/usuario/login'; // URL del endpoint de inicio de sesión

  constructor(private http: HttpClient) {}

  // Método para realizar la solicitud de inicio de sesión
  login(loginData: any) {

    return this.http.post(this.apiUrl, loginData);
  }
}
