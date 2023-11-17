export interface IngRec {
  ingrediente: string;
  cantidad: number;
  unidad: string;
}

export interface Receta {
  _id: string;
  nombre: string;
  descripcion: string;
  usuarioid: string;
  imgReceta: string;
  ingredientes: IngRec[];
}

export class RecetaConstructor implements Receta {
  constructor(
    public _id: string = '',
    public nombre: string = '',
    public descripcion: string = '',
    public usuarioid: string = '',
    public imgReceta: string = '',
    public ingredientes: IngRec[] = [
      {
        ingrediente: '',
        cantidad: 0,
        unidad: '',
      },
    ],
  ) {}
}

export interface RecetaCrear {
  nombre: string;
  descripcion: string;
  imgReceta: string;
  ingredientes: IngRec[];
}
