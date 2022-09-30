import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  segmentValue = '1';

  datos: any = [];

  idServicio: any;
  nombre: any;
  descripcion: any;
  ubicacion: any;
  imagen: any;
  categoria: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: ServiceService
    ){
      this.activatedRoute.paramMap.subscribe(p => {
        this.idServicio = p.get('idServicio');
        console.log(this.idServicio);
        this.getServicio(this.idServicio);
      });
    }

  ngOnInit() {
  }

  getServicio(idServicio){
    this.servicio.getServiciosById(idServicio).subscribe((res: any) => {
      console.log('Sitio encontrado', res);
      const servicio = res[0];
      this.nombre = servicio.nomServicio;
      this.descripcion = servicio.desServicio;
      this.ubicacion = servicio.ubiServicio;
      this.imagen = servicio.urlServicio;
      this.categoria = servicio.categoriaServicio;
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
