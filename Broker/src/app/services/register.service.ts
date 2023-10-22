import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  URL_USER = '';

  postRegister(user: UserPost){
      return this.http.post<UserPost>(this.URL_USER, user);
  }

}

class UserPost {
  nombre: string;
  apellido: string;
  dni: number;
  correo: string;
  nacimiento: string;
  contraseña: string;
  telefono: string;
}
  
