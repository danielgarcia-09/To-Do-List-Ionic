import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Tab1Page } from '../../pages/tab1/tab1.page';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from '../../models/list-item.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})

export class ListasComponent implements OnInit {
  @ViewChild( IonList ) lista: IonList;
  @Input() terminada = true;
  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController ) { }

  ngOnInit() {}

  listaSeleccionada(lista: Lista){
    if (this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrarLista(item: Lista){
    this.deseosService.borrarLista( item );
  }

  async editarLista( item: Lista){

    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: item.titulo
        }
      ],
      buttons: [
        {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'danger',
            handler: () => {
              console.log('bobo');
            }
        },
        {
          text: 'Guardar',
          handler: (data) => {
              if (data.titulo.length === 0){
                return;
              }
              item.titulo = data.titulo;
              this.deseosService.guardarStorage();
              this.lista.closeSlidingItems();
          }
        }
    ]
    });

    await alert.present();
  }

}
