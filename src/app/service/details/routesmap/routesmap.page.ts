import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute} from '@angular/router';
import { ServiceService } from '../../service.service';
import { WelcomeService } from 'src/app/welcome/welcome.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

declare let google;


@Component({
  selector: 'app-routesmap',
  templateUrl: './routesmap.page.html',
  styleUrls: ['./routesmap.page.scss'],
})
export class RoutesmapPage implements OnInit {

  map = null;

  lati: number;
  long: number;

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  destination = { lat: -7.738416556390178, lng: -79.18561818964855 };

  idServicio: any;
  nombre: any;
  descripcion: any;
  ubicacion: any;
  imagen: any;
  categoria: any;
  latitud: any;
  longitud: any;

  constructor(
    protected platform: Platform,
    private activatedRoute: ActivatedRoute,
    private servicio: ServiceService,
    private sanitizer: DomSanitizer,
    private welcomeservice: WelcomeService,
    private geolocation: Geolocation
    ){
      this.activatedRoute.paramMap.subscribe(p => {
        this.idServicio = p.get('rutasSe');
        console.log(this.idServicio);
        this.getServicio(this.idServicio);
      });
    }

    ngOnInit() {
      this.loadMap();
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

    loadMap() {
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log('resp', resp);
        this.welcomeservice.locations[0].geometry.coordinates = [
          this.lati = resp.coords.latitude,
          this.long = resp.coords.longitude
        ];
        console.log('latitud ori: ', this.lati, 'longitud ori: ', this.long);
        console.log('latitud dest: ', this.latitud, 'longitud dest: ', this.longitud);
        // create a new map by passing HTMLElement
        const mapEle: HTMLElement = document.getElementById('map');
        const indicatorsEle: HTMLElement = document.getElementById('indicators');
        // create map
        this.map = new google.maps.Map(mapEle, {
          center: {lat: this.lati, lng: this.long},
          zoom: 15
        });
        this.directionsDisplay.setMap(this.map);
        this.directionsDisplay.setPanel(indicatorsEle);

        google.maps.event.addListenerOnce(this.map, 'idle', () => {
          mapEle.classList.add('show-map');
          this.calculateRoute();
        });
       }).catch((error) => {
         console.log('Error getting location', error);
       });
    }

    calculateRoute() {
      this.directionsService.route({
        origin: {lat: this.lati, lng: this.long },
        destination: this.destination,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (response, status)  => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(response);
        } else {
          alert('Could not display directions due to: ' + status);
        }
      });
    }
}
