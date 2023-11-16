import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Receta } from '../interfaces/receta';

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
}
