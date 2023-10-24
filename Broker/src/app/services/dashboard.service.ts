import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'https://localhost:7037/api/Cliente'; // Definir la URL de tu endpoint

  constructor(private http: HttpClient) {}

  // Método para realizar la solicitud de registro
  GetComprasByID(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}
