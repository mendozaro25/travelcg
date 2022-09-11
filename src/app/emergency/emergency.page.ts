import { Component, OnInit } from '@angular/core';
import { EmergencyService } from './emergency.service';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage implements OnInit {

  searchTerm: string;


  emergencias = [];


  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private Servicio: EmergencyService) { }

  ngOnInit() {
    this.emergencias = this.Servicio.getEmergencias();
  }

}
