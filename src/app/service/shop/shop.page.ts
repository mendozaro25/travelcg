import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  searchTerm: string;

  serviciosCompras: any = [];

  constructor(private Servicio: ServiceService) {
    this.getCompras();
   }

  ngOnInit() {
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
    this.Servicio.getServiciosCompras().subscribe((res: any) => {
      console.log('Compras encontrados correctamente', res);
      this.serviciosCompras = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}
