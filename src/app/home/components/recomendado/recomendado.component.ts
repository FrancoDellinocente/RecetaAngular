import { RecetaService } from './../../../services/receta.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../../../shared/item-card/item-card.component';
import { ItemCard } from '../../../interfaces/item-card';

@Component({
  selector: 'app-recomendado',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './recomendado.component.html',
  styleUrl: './recomendado.component.css',
})
export class RecomendadoComponent implements OnInit {
  constructor(private recetaService: RecetaService) {}

  items: ItemCard[] = [];

  ngOnInit(): void {
    this.recetaService.GetAllRecetas().subscribe((recetas) => {
      console.log(recetas);
      this.items = recetas;
    });
  }
}
