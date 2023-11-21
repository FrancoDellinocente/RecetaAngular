import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  router = inject(Router);
  mail: string = '';
  password: string = '';

  async iniciarSesion(event: Event) {
    event.preventDefault();
    try {
      const respuesta = await this.authService
        .Login(this.mail, this.password)
        .toPromise();
      localStorage.setItem('token', respuesta!.token);
      this.router.navigate(['/']);
    } catch (error) {
      console.error(error);
    }
  }
}
