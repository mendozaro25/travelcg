import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {

  searchTerm: string;

  serviciosHoteles: any = [];

  constructor(private Servicio: ServiceService) {
    this.getHoteles();
   }

  ngOnInit() {
  }

  getHoteles(){
    this.Servicio.getServiciosHoteles().subscribe((res: any) => {
      console.log('Hoteles encontrados correctamente', res);
      this.serviciosHoteles = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  ionViewWillEnter(){
    this.Servicio.getServiciosHoteles().subscribe((res: any) => {
      console.log('Hoteles encontrados correctamente', res);
      this.serviciosHoteles = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }
}
