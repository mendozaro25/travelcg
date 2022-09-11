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

  idSitio: any;
  nombre: any;
  descripcion: any;
  ubicacion: any;
  imagen: any;
  atencion: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: SitetoursService
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
        this.atencion = sitio.atencionSitio;
      },(error: any) => {
        console.log('Error', error);
      }
      );
    }

    segmentChanged(event){
      console.log(event);
      this.segmentValue = event.detail.value;
    }
}

