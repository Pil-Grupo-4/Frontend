import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private apiUrl = 'https://localhost:7037/api/Compra/registro-compra'; 

  constructor(private http: HttpClient) {}

  registreCompra(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}