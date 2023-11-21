import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Receta, RecetaCrear } from '../interfaces/receta';
import { ItemCard } from '../interfaces/item-card';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  constructor(private http: HttpClient) {}

  GetAllRecetas(): Observable<ItemCard[]> {
    return this.http
      .get<ItemCard[]>('http://localhost:3000/recetas/mininfo')
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud:', error);
          throw error;
        }),
      );
  }

  Create(receta: RecetaCrear): Observable<Receta> {
    const token = localStorage.getItem('token');

    // Crear los encabezados con el token
    //(utilizar interceptor)
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
