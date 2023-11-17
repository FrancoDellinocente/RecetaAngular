import { IngredienteService } from './../../../services/ingrediete/ingrediente.service';
import {
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingrediente } from '../../../interfaces/ingrediente';
import { IngRec, RecetaCrear } from '../../../interfaces/receta';
import { RecetaService } from '../../../services/receta.service';

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
  ingreForm: FormGroup;
  ingredientesSeleccionados: IngRec[] = [];

  constructor(
    private IngredienteService: IngredienteService,
    private recetaService: RecetaService,
    private fb: FormBuilder,
  ) {
    this.recetaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imgReceta: ['', Validators.required],
      ingrediente: [[], Validators.minLength(1)],
    });

    this.ingreForm = this.fb.group({
      _id: ['', Validators.required],
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
  }

  agregarIngrediente() {
    if (this.ingreForm && this.ingreForm.valid) {
      const nuevoIngrediente: IngRec = {
        ingrediente: this.ingreForm.get('_id')!.value,
        cantidad: this.ingreForm.get('cantidad')!.value,
        unidad: this.ingreForm.get('unidad')!.value,
      };
      this.ingredientesSeleccionados.push(nuevoIngrediente);
      this.ingreForm.get('cantidad')!.reset();
      this.ingreForm.get('unidad')!.reset();
    }
  }

  eliminarIngrediente(index: number) {
    this.ingredientesSeleccionados.splice(index, 1);
  }

  guardarReceta() {
    if (this.recetaForm.valid && this.ingredientesSeleccionados.length > 0) {
      const nuevaReceta: RecetaCrear = {
        nombre: this.recetaForm.get('nombre')!.value,
        descripcion: this.recetaForm.get('descripcion')!.value,
        imgReceta: this.recetaForm.get('imgReceta')!.value,
        ingredientes: this.ingredientesSeleccionados,
      };
      this.recetaService.Create(nuevaReceta).subscribe(
        (respuesta) => {
          console.log('Receta creada exitosamente:', respuesta);
        },
        (error) => {
          console.error('Error al crear la receta:', error);
        },
      );
      console.log(nuevaReceta);
    }
  }
}
