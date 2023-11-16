import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from '../../components/bienvenido/bienvenido.component';
import { RecomendadoComponent } from '../../components/recomendado/recomendado.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BienvenidoComponent, RecomendadoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
