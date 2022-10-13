import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeService } from '../welcome/welcome.service';
import SwiperCore, { EffectFade, SwiperOptions } from 'swiper';
import { SitetoursService } from '../sitetours/sitetours.service';
import { ToastController } from '@ionic/angular';

// install Swiper modules
SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {

  userDetail: string;
  searchTerm: string;
  config: SwiperOptions;
  config1: SwiperOptions;
  trips: any[] = [];

  sitios: any = [];

  constructor(
    private router: Router,
    private welcomeService: WelcomeService,
    private Servicio: SitetoursService,
    private toastController: ToastController
  )
  {
    this.getSitios();
  }

  getSitios(){
    this.Servicio.getSitios().subscribe((res: any) => {
      console.log('Sitios encontrados correctamente', res);
      this.sitios = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  ngOnInit() {
    this.welcomeService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
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
          color: 'primary',
        });
        toast.present();
      })
      .catch(error => {
        console.log(error);
      });
  }


  ngAfterContentChecked() {
    this.config = {
      slidesPerView: 2.1
    };
    this.config1 = {
      slidesPerView: 2
    };
  }

  ionViewWillEnter(){
    this.Servicio.getSitios().subscribe((res: any) => {
      console.log('Sitios encontrados correctamente', res);
      this.sitios = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}
