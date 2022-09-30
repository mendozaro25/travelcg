import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SitetoursService } from '../../sitetours.service';

import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-panoramic',
  templateUrl: './panoramic.page.html',
  styleUrls: ['./panoramic.page.scss'],
})
export class PanoramicPage implements OnInit {

  datos: any = [];

  imagen360: SafeResourceUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: SitetoursService,
    private sanitizer: DomSanitizer
    ){
    }

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe( p => {
        console.log(p.get('idSitio'));
        this.datos = this.servicio.getSitiosById(p.get('idSitio'));
        console.log(this.datos);
        this.imagen360 = this.sanitizer.bypassSecurityTrustResourceUrl(this.datos.url360Sitio);
      });
    }
}
