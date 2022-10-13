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

  idSitio: any;

  nombre: any;
  descripcion: any;
  ubicacion: any;
  atención: any;
  imagen: any;
  imagen360: SafeResourceUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: SitetoursService,
    private sanitizer: DomSanitizer
    ){
      this.activatedRoute.paramMap.subscribe(p => {
        this.idSitio = p.get('idSitio');
        console.log(this.idSitio);
        this.getSitio(this.idSitio);
      });
    }

    ngOnInit() {
    }

    getSitio(idSitio){
      this.servicio.getSitiosById(idSitio).subscribe((res: any) => {
        console.log('Sitio encontrado', res);
        const servicio = res[0];
        this.nombre = servicio.nomSitio;
        this.descripcion = servicio.desSitio;
        this.ubicacion = servicio.ubiSitio;
        this.atención = servicio.atencionSitio;
        this.imagen = servicio.urlSitio;
        this.imagen360 = this.sanitizer.bypassSecurityTrustResourceUrl(servicio.url360Sitio);
      },(error: any) => {
        console.log('Error', error);
      }
      );
    }
}
