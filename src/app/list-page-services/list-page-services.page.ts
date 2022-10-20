import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CurdFavoritesService } from '../favorite-service/favorite-service.service';

@Component({
  selector: 'app-list-page-services',
  templateUrl: './list-page-services.page.html',
  styleUrls: ['./list-page-services.page.scss'],
})
export class ListPageServicesPage implements OnInit {

  servicios: any = [];

  constructor(
    private alertCtrl: AlertController,
    private crud: CurdFavoritesService
  ) {
    this.getServicesFavorite();
   }

  ngOnInit() {
  }

  async getServicesFavorite(){
    this.servicios = await this.crud.getData();
  }

  async ionViewWillEnter(){
    this.servicios = await this.crud.getData();
  }

  async delete(index) {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: '¿Estás seguro que deseas eliminarlo?',
      buttons: [
        {
        text: 'Si',
        handler: ()=> this.crud.removeItem(index) && this.servicios.splice(index, 1),
        },
        {
        text: 'No',
        },
      ],
    });
    alert.present();
  }

}
