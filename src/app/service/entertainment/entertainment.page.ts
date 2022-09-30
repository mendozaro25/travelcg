import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {

  searchTerm: string;

  serviciosEntretenimientos: any = [];

  constructor(private Servicio: ServiceService) {
    this.getEntretenimientos();
   }

  ngOnInit() {
  }

  getEntretenimientos(){
    this.Servicio.getServiciosEntretenimientos().subscribe((res: any) => {
      console.log('Entretenimientos encontrados correctamente', res);
      this.serviciosEntretenimientos = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

  ionViewWillEnter(){
    this.Servicio.getServiciosEntretenimientos().subscribe((res: any) => {
      console.log('Entretenimientos encontrados correctamente', res);
      this.serviciosEntretenimientos = res;
    }, (error: any) => {
      console.log('Error', error);
    });
  }

}
