import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://localhost:7037/api/Usuario'; // Definir la URL de tu endpoint

  constructor(private http: HttpClient) {}

  // Método para realizar la solicitud de registro
  registerUser(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}
