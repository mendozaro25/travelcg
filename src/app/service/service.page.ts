import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  searchTerm: string;

  servicios: any = [];

  serviciosHoteles: any = [];

  serviciosEntretenimientos: any = [];

  serviciosCompras: any = [];

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private Servicio: ServiceService) {
    this.getRestaurantes();
    this.getHoteles();
    this.getEntretenimientos();
    this.getCompras();
  }

  ngOnInit() {
  }

  getRestaurantes(){
    this.Servicio.getServicios().subscribe((res: any) => {
      console.log('Restaurantes encontrados correctamente', res);
      this.servicios = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  getHoteles(){
    this.Servicio.getServiciosHoteles().subscribe((res: any) => {
      console.log('Hoteles encontrados correctamente', res);
      this.serviciosHoteles = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  getEntretenimientos(){
    this.Servicio.getServiciosEntretenimientos().subscribe((res: any) => {
      console.log('Entretenimientos encontrados correctamente', res);
      this.serviciosEntretenimientos = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  getCompras(){
    this.Servicio.getServiciosCompras().subscribe((res: any) => {
      console.log('Compras encontrados correctamente', res);
      this.serviciosCompras = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  ionViewWillEnter(){
    this.Servicio.getServicios().subscribe((res: any) => {
      console.log('Restaurantes correctamente', res);
      this.servicios = res;
    }, (error: any) => {
      console.log('Error', error);
    });
    this.Servicio.getServiciosHoteles().subscribe((res: any) => {
      console.log('Hoteles encontrados correctamente', res);
      this.serviciosHoteles = res;
    }, (error: any) => {
      console.log('Error', error);
    });
    this.Servicio.getServiciosEntretenimientos().subscribe((res: any) => {
      console.log('Entretenimientos encontrados correctamente', res);
      this.serviciosEntretenimientos = res;
    }, (error: any) => {
      console.log('Error', error);
    });
    this.Servicio.getServiciosCompras().subscribe((res: any) => {
      console.log('Compras encontrados correctamente', res);
      this.serviciosCompras = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}
