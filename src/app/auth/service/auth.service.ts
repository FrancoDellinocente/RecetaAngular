import { Usuario } from './../../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  Login(
    mail: string,
    password: string,
  ): Observable<{ usuario: Usuario; token: string }> {
    const datosLogin = {
      mail: mail,
      contraseña: password,
    };
    return this.http
      .post<{ usuario: Usuario; token: string }>(
        'http://localhost:3000/auth/login',
        datosLogin,
      )
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud:', error);
          throw error;
        }),
      );
  }

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
