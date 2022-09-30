import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SitetoursService } from '../sitetours.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  segmentValue = '1';

  datos: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: SitetoursService,
    private toastController: ToastController
    ){
    }

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe( p => {
        console.log(p.get('idSitio'));
        this.datos = this.servicio.getSitiosById(p.get('idSitio'));
        console.log(this.datos);
      });
    }

    async likeSite(){
      const toast = await this.toastController.create({
        message: 'Agregado a tus sitios favoritos...',
        duration: 3000,
        icon: 'heart-sharp',
        color: 'success',
        position: 'top'
      });
      toast.present();
    }

    segmentChanged(event){
      console.log(event);
      this.segmentValue = event.detail.value;
    }
}

