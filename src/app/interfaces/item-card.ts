export interface ItemCard {
  recetaId: string;
  recetaNombre: string;
  imgReceta: string;
  usuarioid: string;
  usuarioNombre: string;
  usuarioImg: string;
}

export class ItemCardContructor implements ItemCard {
  constructor(
    public recetaId: string = '',
    public recetaNombre: string = '',
    public imgReceta: string = '',
    public usuarioid: string = '',
    public usuarioNombre: string = '',
    public usuarioImg: string = '',
  ) {}
}
