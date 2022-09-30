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
  }

  ngOnInit() {
    this.sitios = this.Servicio.getSitios();
    console.log(this.sitios);
  }

  ionViewWillEnter(){
    this.sitios = this.Servicio.getSitios();
  }
}
