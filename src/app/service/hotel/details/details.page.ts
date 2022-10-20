import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CurdFavoritesService } from 'src/app/favorite-service/favorite-service.service';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  segmentValue = '1';

  datos: any = [];

  idServicio: any;
  nombre: any;
  descripcion: any;
  ubicacion: any;
  imagen: any;
  categoria: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: ServiceService,
    private toastController: ToastController,
    private crud: CurdFavoritesService
    ){
      this.activatedRoute.paramMap.subscribe(p => {
        this.idServicio = p.get('idServicio');
        console.log(this.idServicio);
        this.getServicio(this.idServicio);
      });
    }

  ngOnInit() {
  }

  getServicio(idServicio){
    this.servicio.getServiciosById(idServicio).subscribe((res: any) => {
      console.log('Servicio encontrado', res);
      const servicio = res[0];
      this.nombre = servicio.nomServicio;
      this.descripcion = servicio.desServicio;
      this.ubicacion = servicio.ubiServicio;
      this.imagen = servicio.urlServicio;
      this.categoria = servicio.categoriaServicio;
    },(error: any) => {
      console.log('Error', error);
    }
    );
  }

  async addServiceToFavorite() {
    const datos = [
      {
        idServicio: this.idServicio,
        nombreServicio: this.nombre,
        ubicacionServicio: this.ubicacion,
        imagenServicio: this.imagen
      }
    ];
    await this.crud.addData(datos);
    const toast = await this.toastController.create({
      message: 'Agregado a tus servicios favoritos',
      duration: 3000,
      icon: 'checkmark-circle-sharp',
      color: 'primary',
      position: 'bottom'
    });
    toast.present();
    console.log('Services add to Favorite', datos);
  }

  segmentChanged(event){
    console.log(event);
    this.segmentValue = event.detail.value;
  }

}
