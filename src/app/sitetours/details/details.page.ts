import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CrudCotizacionesService } from 'src/app/favorite/crud-favorite.service';
import { SitetoursService } from '../sitetours.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  segmentValue = '1';

  idSitio: any;

  nombre: any;
  descripcion: any;
  ubicacion: any;
  atencion: any;
  imagen: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: SitetoursService,
    private toastController: ToastController,
    private crud: CrudCotizacionesService
    ){
      this.activatedRoute.paramMap.subscribe(p => {
        this.idSitio = p.get('idSitio');
        console.log(this.idSitio);
        this.getSitio(this.idSitio);
      });
    }

    ngOnInit() {
    }

    getSitio(idSitio){
      this.servicio.getSitiosById(idSitio).subscribe((res: any) => {
        console.log('Sitio encontrado', res);
        const servicio = res[0];
        this.nombre = servicio.nomSitio;
        this.descripcion = servicio.desSitio;
        this.ubicacion = servicio.ubiSitio;
        this.atencion = servicio.atencionSitio;
        this.imagen = servicio.urlSitio;
      },(error: any) => {
        console.log('Error', error);
      }
      );
    }

    async addSiteToFavorite() {
      const datos = [
        {
          idSitio: this.idSitio,
          nombreSitio: this.nombre,
          ubicacionSitio: this.ubicacion,
          imagenSitio: this.imagen
        }
      ];
      await this.crud.addData(datos);
      const toast = await this.toastController.create({
        message: 'Agregado a tus sitios favoritos',
        duration: 3000,
        icon: 'checkmark-circle-sharp',
        color: 'primary',
        position: 'bottom'
      });
      toast.present();
      console.log('Sites add to Favorite', datos);
    }

    segmentChanged(event){
      console.log(event);
      this.segmentValue = event.detail.value;
    }
}

