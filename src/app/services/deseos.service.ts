import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { this.cargarStorage(); }

  crearLista( termino: string ){
    const newLista = new Lista(termino);
    this.listas.push(newLista);
    this.guardarStorage();
    return newLista.id;
  }

  obtenerLista( id: number | string ){
      id = Number(id);
      return this.listas.find( listaData => listaData.id === id );
  }

  borrarLista( item: Lista ){
    this.listas = this.listas.filter(listaData => listaData.id !== item.id );
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){
    if (localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas = [];
    }

  }
}
