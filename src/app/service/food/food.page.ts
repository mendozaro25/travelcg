import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  searchTerm: string;

  serviciosRestaurantes: any = [];

  constructor(private Servicio: ServiceService) {
    this.getRestaurantes();
   }

  ngOnInit() {
  }

  getRestaurantes(){
    this.Servicio.getServicios().subscribe((res: any) => {
      console.log('Restaurantes encontrados correctamente', res);
      this.serviciosRestaurantes = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  ionViewWillEnter(){
    this.Servicio.getServicios().subscribe((res: any) => {
      console.log('Restaurantes encontrados correctamente', res);
      this.serviciosRestaurantes = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}
