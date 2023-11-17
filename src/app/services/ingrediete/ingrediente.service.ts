import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Ingrediente } from '../../interfaces/ingrediente';

@Injectable({
  providedIn: 'root',
})
export class IngredienteService {
  constructor(private http: HttpClient) {}

  GetAllIngredientes(): Observable<Ingrediente[]> {
    return this.http
      .get<Ingrediente[]>('http://localhost:3000/ingredientes')
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud:', error);
          throw error;
        }),
      );
  }
}
