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

  idSitio: any;
  nombre: any;
  descripcion: any;
  ubicacion: any;
  imagen: any;
  imagen360: SafeResourceUrl;
  atencion: any;

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
        const sitio = res[0];
        this.nombre = sitio.nomSitio;
        this.descripcion = sitio.desSitio;
        this.ubicacion = sitio.ubiSitio;
        this.imagen = sitio.urlSitio;
        this.imagen360 = this.sanitizer.bypassSecurityTrustResourceUrl(sitio.url360Sitio);
        this.atencion = sitio.atencionSitio;
      },(error: any) => {
        console.log('Error', error);
      }
      );
    }
}
