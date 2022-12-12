import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome/welcome.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { SitetoursService } from '../sitetours/sitetours.service';
import { ServiceService } from '../service/service.service';
import { CrudCotizacionesService } from '../favorite/crud-favorite.service';
import { CurdFavoritesService } from '../favorite-service/favorite-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  sitiosfav: any = [];

  sitios: any = [];

  servicesFav: any = [];

  servicios: any = [];

  email: string;

  constructor(
    private router: Router,
    private welcomeService: WelcomeService,
    private toastController: ToastController,
    private crud: CrudCotizacionesService,
    private crudService: CurdFavoritesService,
    private servicioTuristicos: SitetoursService,
    private servicio: ServiceService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {

    this.getSitios();

    this.getServicios();

    this.getSitesFavorite();

    this.getServicesFavorite();

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

  async getServicesFavorite(){
    this.servicesFav = await this.crudService.getData();
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

  async ionViewWillEnter(){
    this.sitiosfav = await this.crud.getData();
    this.servicesFav = await this.crudService.getData();

    this.servicio.getServiciosHoteles().subscribe((res: any) => {
      console.log('Hoteles encontrados correctamente', res);
      this.servicios = res;
    }, (error: any) => {
      console.log('Error', error);
    });

    this.servicioTuristicos.getSitios().subscribe((res: any) => {
      console.log('Sitios encontrados correctamente', res);
      this.sitios = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  async removeUser(){

    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: '¿Estás seguro que deseas elimiar tu cuenta?',
      buttons: [
        {
        text: 'Si',
        handler: ()=> this.deleteUserFirebase(),
        },
        {
        text: 'No',
        },
      ],
    });
    alert.present();

  }

  async deleteUserFirebase() {
    this.welcomeService.deleteUser();
    localStorage.removeItem('ingresado');
    this.router.navigateByUrl('welcome');
    const toast = await this.toastController.create({
      message: '¡TU CUENTA FUE ELIMINADA!',
      duration: 4000,
      icon: 'hand-left-sharp',
      color: 'danger',
    });
    toast.present();
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
