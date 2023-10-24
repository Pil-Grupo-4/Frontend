import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/;
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://localhost:7037/api/Usuario/usuario/login';
  private usuarioLogeadoSubject = new BehaviorSubject<Usuario | null>(null);

  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post(this.apiUrl, loginData).pipe(
      tap((usuario: Usuario) => {
        this.usuarioLogeadoSubject.next(usuario);
      })
    );
  }

  get usuarioLogeado$() {
    return this.usuarioLogeadoSubject.asObservable();
  }
}
