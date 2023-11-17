import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  mail: string = '';
  password: string = '';

  async iniciarSesion(event: Event) {
    event.preventDefault();
    try {
      const respuesta = await this.authService
        .Login(this.mail, this.password)
        .toPromise();
      console.log(respuesta);
      localStorage.setItem('token', respuesta!.token);
    } catch (error) {
      console.error(error);
    }
  }
}
