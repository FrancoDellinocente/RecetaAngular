import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Receta, RecetaCrear } from '../interfaces/receta';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  constructor(private http: HttpClient) {}

  GetAllRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>('http://localhost:3000/recetas').pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        throw error;
      }),
    );
  }

  Create(receta: RecetaCrear): Observable<Receta> {
    const token = localStorage.getItem('token');

    // Crear los encabezados con el token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .post<Receta>('http://localhost:3000/recetas', receta, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud:', error);
          throw error;
        }),
      );
  }
}
