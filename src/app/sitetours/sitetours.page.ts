import { Component, OnInit } from '@angular/core';
import { SitetoursService } from './sitetours.service';

@Component({
  selector: 'app-sitetours',
  templateUrl: './sitetours.page.html',
  styleUrls: ['./sitetours.page.scss'],
})
export class SitetoursPage implements OnInit {

  searchTerm: string;

  sitios: any = [];


  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private Servicio: SitetoursService) {
    this.getSitios();
  }

  ngOnInit() {

  }

  getSitios(){
    this.Servicio.getSitios().subscribe((res: any) => {
      console.log('Sitios encontrados correctamente', res);
      this.sitios = res;
    }, (error: any) => {
      console.log('Error', error);
    });
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
