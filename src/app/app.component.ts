import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { WelcomeService } from './welcome/welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    protected platform: Platform,
    private geolocation: Geolocation,
    private welcomeservice: WelcomeService
  ) {
    this.platform.ready().then(async () => {
      this.getGeolocation();
    });
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('resp', resp);
      this.welcomeservice.locations[0].geometry.coordinates = [
        resp.coords.latitude,
        resp.coords.longitude
      ];
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     const watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
}
