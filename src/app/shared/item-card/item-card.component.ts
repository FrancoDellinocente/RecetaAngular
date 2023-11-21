import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCard, ItemCardContructor } from '../../interfaces/item-card';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  @Input() iteme: ItemCard = new ItemCardContructor();
}
