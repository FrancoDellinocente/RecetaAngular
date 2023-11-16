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

  iniciarSesion(event: Event) {
    event.preventDefault();
    this.authService.Login(this.mail, this.password).subscribe(
      (respuesta) => {
        // Hacer algo con la respuesta exitosa
        console.log(respuesta);
      },
      (error) => {
        // Manejar el error
        console.error(error);
      },
    );
  }
}
