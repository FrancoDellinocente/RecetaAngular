import { AuthService } from './../auth/service/auth.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  router = inject(Router);
  authService = inject(AuthService);

  onClickLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
