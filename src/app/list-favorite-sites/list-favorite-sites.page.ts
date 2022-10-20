import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CrudCotizacionesService } from '../favorite/crud-favorite.service';
import { FavoritePage } from '../favorite/favorite.page';
import { FavoriteService } from '../favorite/favorite.service';

@Component({
  selector: 'app-list-favorite-sites',
  templateUrl: './list-favorite-sites.page.html',
  styleUrls: ['./list-favorite-sites.page.scss'],
})
export class ListFavoriteSitesPage implements OnInit {
  
  sitios: any = [];

  sitios2: any = [];

  quoteItems$: Observable<FavoritePage[]>;

  constructor(
    private favoriteService: FavoriteService,
    private alertCtrl: AlertController,
    private crud: CrudCotizacionesService
  ) {
    this.getSitesFavorite();
  }

  ngOnInit() {

    this.quoteItems$ = this.favoriteService.getQuoties();
    this.quoteItems$.subscribe(res => this.sitios2 = res);

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
