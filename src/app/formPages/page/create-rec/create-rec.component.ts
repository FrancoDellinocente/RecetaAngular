import { IngredienteService } from './../../../services/ingrediete/ingrediente.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingrediente } from '../../../interfaces/ingrediente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IngRec, RecetaCrear } from '../../../interfaces/receta';

@Component({
  selector: 'app-create-rec',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-rec.component.html',
  styleUrls: ['./create-rec.component.css'],
})
export class CreateRecComponent implements OnInit {
  listIng: Ingrediente[] = [];
  recetaForm: FormGroup;
  ingredientesSeleccionados: IngRec[] = []; // Agrega la declaración de ingredientesSeleccionados

  constructor(
    private IngredienteService: IngredienteService,
    private fb: FormBuilder,
  ) {
    this.recetaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imgReceta: ['', Validators.required],
      cantidad: ['', Validators.required],
      unidad: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.IngredienteService.GetAllIngredientes().subscribe(
      (ingre: Ingrediente[]) => {
        this.listIng = ingre;
      },
    );

    this.recetaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imgReceta: ['', Validators.required],
      cantidad: ['', Validators.required],
      unidad: ['', Validators.required],
    });
  }

  agregarIngrediente() {
    if (this.recetaForm && this.recetaForm.valid) {
      const nuevoIngrediente: IngRec = {
        _id: this.recetaForm.get('unidad')!.value,
        cantidad: this.recetaForm.get('cantidad')!.value,
        unidad: this.recetaForm.get('unidad')!.value,
      };
      this.ingredientesSeleccionados.push(nuevoIngrediente);
      this.recetaForm.get('cantidad')!.reset();
      this.recetaForm.get('unidad')!.reset();
    }
  }

  eliminarIngrediente(index: number) {
    this.ingredientesSeleccionados.splice(index, 1);
  }

  guardarReceta() {
    if (this.recetaForm.valid && this.ingredientesSeleccionados.length > 0) {
      const nuevaReceta: RecetaCrear = {
        _id: '', // Asigna un valor adecuado para _id
        nombre: this.recetaForm.get('nombre')!.value,
        descripcion: this.recetaForm.get('descripcion')!.value,
        imgReceta: this.recetaForm.get('imgReceta')!.value,
        ingrediente: this.ingredientesSeleccionados,
      };
      // Aquí puedes guardar la receta o realizar la lógica correspondiente
      console.log(nuevaReceta);
    }
  }
}
