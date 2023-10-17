import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7037/api/Usuario'; // Reemplaza con la URL de tu endpoint de creación de usuario

  constructor(private http: HttpClient) { }

  createUser(userData: any): Observable<any> {
    // Realiza la solicitud HTTP POST para crear un usuario
    return this.http.post(this.apiUrl, userData);
  }


  loginUser(userData: any): Observable<any> {
    // Realiza la solicitud HTTP POST para crear un usuario
    return this.http.post(this.apiUrl, userData);
  }
}
