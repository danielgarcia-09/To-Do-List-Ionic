import { ListaItem } from './list-item.model';
export class Lista{
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    completada: boolean;
    items: ListaItem[];

    constructor( titulo: string ){
        this.titulo = titulo;
        this.id = new Date().getTime();
        this.creadaEn = new Date();
        this.completada = false;
        this.items = [];
    }
}
