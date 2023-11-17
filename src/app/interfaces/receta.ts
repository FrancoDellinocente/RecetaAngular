export interface IngRec {
  _id: string;
  cantidad: number;
  unidad: string;
}

export interface Receta {
  _id: string;
  nombre: string;
  descripcion: string;
  usuarioid: string;
  imgReceta: string;
  ingrediente: IngRec[];
}

export class RecetaConstructor implements Receta {
  constructor(
    public _id: string = '',
    public nombre: string = '',
    public descripcion: string = '',
    public usuarioid: string = '',
    public imgReceta: string = '',
    public ingrediente: IngRec[] = [
      {
        _id: '',
        cantidad: 0,
        unidad: '',
      },
    ],
  ) {}
}

export interface RecetaCrear {
  _id: string;
  nombre: string;
  descripcion: string;
  imgReceta: string;
  ingrediente: IngRec[];
}
