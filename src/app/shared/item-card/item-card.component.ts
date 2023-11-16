import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Receta, RecetaConstructor } from '../../interfaces/receta';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  @Input() iteme: Receta = new RecetaConstructor();
}
