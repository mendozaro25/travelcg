import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  //listar
  getSitios(){
    return this.http.get('http://travelcg-backend.test/admin/api/sites/getSite.php');
  }

  //buscar
  getSitiosById(idSitio: string){
    return this.http.get('http://travelcg-backend.test/admin/api/sites/getSiteById.php?idSitio='+idSitio);
  }
}
