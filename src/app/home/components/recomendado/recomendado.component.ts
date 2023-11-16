import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../../../shared/item-card/item-card.component';

@Component({
  selector: 'app-recomendado',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './recomendado.component.html',
  styleUrl: './recomendado.component.css',
})
export class RecomendadoComponent {
  items: string[] = ['d', 's', 'a'];
}
