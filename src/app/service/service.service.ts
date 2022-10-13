import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  //listar
  getServicios(){
    return this.http.get('https://tourscg.com/admin/api/services/getService.php');
  }

  getServiciosHoteles(){
    return this.http.get('https://tourscg.com/admin/api/services/getServiceHotel.php');
  }

  getServiciosEntretenimientos(){
    return this.http.get('https://tourscg.com/admin/api/services/getServiceEntert.php');
  }

  getServiciosCompras(){
    return this.http.get('https://tourscg.com/admin/api/services/getServiceShopping.php');
  }

  //buscar
  getServiciosById(idServicio: string){
    return this.http.get('https://tourscg.com/admin/api/services/getServiceById.php?idServicio='+idServicio);
  }

}
