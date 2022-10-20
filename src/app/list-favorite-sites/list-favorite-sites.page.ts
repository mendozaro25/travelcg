import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { CrudCotizacionesService } from '../favorite/crud-favorite.service';

@Component({
  selector: 'app-list-favorite-sites',
  templateUrl: './list-favorite-sites.page.html',
  styleUrls: ['./list-favorite-sites.page.scss'],
})
export class ListFavoriteSitesPage implements OnInit {

  sitios: any = [];

  constructor(
    private alertCtrl: AlertController,
    private crud: CrudCotizacionesService
  ) {
    this.getSitesFavorite();
  }

  ngOnInit() {
  }

  async getSitesFavorite(){
    this.sitios = await this.crud.getData();
  }

  async ionViewWillEnter(){
    this.sitios = await this.crud.getData();
  }

  async delete(index) {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: '¿Estás seguro que deseas eliminarlo?',
      buttons: [
        {
        text: 'Si',
        handler: ()=> this.crud.removeItem(index) && this.sitios.splice(index, 1),
        },
        {
        text: 'No',
        },
      ],
    });
    alert.present();
  }

}
