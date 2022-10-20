import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome/welcome.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FavoriteService } from '../favorite/favorite.service';
import { FavoritePage } from '../favorite/favorite.page';
import { Observable } from 'rxjs';
import { SitetoursService } from '../sitetours/sitetours.service';
import { ServiceService } from '../service/service.service';
import { CrudCotizacionesService } from '../favorite/crud-favorite.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  sitiosfav: any = [];

  sitios: any = [];

  servicios: any = [];

  email: string;

  constructor(
    private router: Router,
    private welcomeService: WelcomeService,
    private toastController: ToastController,
    private crud: CrudCotizacionesService,
    private servicioTuristicos: SitetoursService,
    private servicio: ServiceService
  ) { }

  ngOnInit() {

    this.getSitios();

    this.getServicios();

    this.getSitesFavorite();

    this.welcomeService.userDetails().subscribe(response => {
      if (response !== null) {
        this.email = response.email;
      }
    }, error => {
      console.log(error);
    });
  }

  async getSitesFavorite(){
    this.sitiosfav = await this.crud.getData();
  }

  async ionViewWillEnter(){
    this.sitiosfav = await this.crud.getData();
  }

  getServicios(){
    this.servicio.getServiciosHoteles().subscribe((res: any) => {
      console.log('Hoteles encontrados correctamente', res);
      this.servicios = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  getSitios(){
    this.servicioTuristicos.getSitios().subscribe((res: any) => {
      console.log('Sitios encontrados correctamente', res);
      this.sitios = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  signOut() {
    this.welcomeService.signoutUser()
      .then(async res => {
        localStorage.removeItem('ingresado');
        this.router.navigateByUrl('welcome');
        const toast = await this.toastController.create({
          message: '¡NOS VEMOS PRONTO!',
          duration: 4000,
          icon: 'hand-left-sharp',
          color: 'secondary',
        });
        toast.present();
      })
      .catch(error => {
        console.log(error);
      });
  }
}
