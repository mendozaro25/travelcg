import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeService } from '../welcome/welcome.service';
import SwiperCore, { EffectFade, SwiperOptions } from 'swiper';
import { SitetoursService } from '../sitetours/sitetours.service';

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
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Servicio: SitetoursService
  )
  {
  }

  ngOnInit() {
    this.sitios = this.Servicio.getSitios();
    console.log(this.sitios);
    this.sitios = this.Servicio.getSitios();
    console.log(this.sitios);
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
      .then(res => {
        localStorage.removeItem('ingresado');
        this.router.navigateByUrl('welcome');
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
    this.sitios = this.Servicio.getSitios();
    console.log(this.sitios);
  }

}
