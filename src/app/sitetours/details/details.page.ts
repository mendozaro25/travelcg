import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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
    private servicio: SitetoursService
    ){
    }

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe( p => {
        console.log(p.get('idSitio'));
        this.datos = this.servicio.getSitiosById(p.get('idSitio'));
        console.log(this.datos);
      });
    }

    segmentChanged(event){
      console.log(event);
      this.segmentValue = event.detail.value;
    }
}

