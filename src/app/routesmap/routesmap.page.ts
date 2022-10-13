import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute} from '@angular/router';
import { SitetoursService } from '../sitetours/sitetours.service';
import { WelcomeService } from '../welcome/welcome.service';
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

  datos: any = [];

  idSitio: any;

  constructor(
    protected platform: Platform,
    private activatedRoute: ActivatedRoute,
    private servicio: SitetoursService,
    private welcomeservice: WelcomeService,
    private geolocation: Geolocation
    ){
      this.activatedRoute.paramMap.subscribe(p => {
        this.idSitio = p.get('rutas');
        console.log(this.idSitio);
        this.getSitio(this.idSitio);
      });
      this.loadMap();
    }

    ngOnInit() {
    }

    getSitio(idSitio){
      this.servicio.getSitiosById(idSitio).subscribe((res: any) => {
        console.log('Sitio encontrado', res);
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
        console.log('latitud dest: ', this.datos.latiSitio, 'longitud dest: ', this.datos.longSitio);
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
