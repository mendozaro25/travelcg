import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SitetoursService {

  sitetours = [
    {
      idSitio: '1',
      nomSitio: 'Fortaleza de Fácala',
      desSitio: 'Fortaleza de Fácala',
      ubiSitio: 'Centro Poblado de Fácala',
      latiSitio: -7.722218624540417,
      longSitio: -79.1584146028836,
      urlSitio: 'https://ucarecdn.com/2f58b109-c6f9-4c1e-88b4-1ef9184a44a6/',
      url360Sitio: 'https://panoraven.com/es/embed/uKufj6k2Xc',
      estadoSitio: 'Activo',
      atencionSitio: '24 horas'
    },
    {
      idSitio: '2',
      nomSitio: 'El Reservorio',
      desSitio: 'Centro Poblado de Lache',
      ubiSitio: 'Centro Poblado de Fácala',
      latiSitio: -7.722218624540417,
      longSitio: -79.1584146028836,
      urlSitio: 'https://ucarecdn.com/031d8669-4393-48b0-bf98-1343b3d687ed/',
      url360Sitio: 'https://panoraven.com/es/embed/f85lwudn4N',
      estadoSitio: 'Activo',
      atencionSitio: '24 horas'
    },
    {
      idSitio: '3',
      nomSitio: 'Centro Poblado de Fácala',
      // eslint-disable-next-line max-len
      desSitio: 'Enamórate de sus hermosos jardines y lagunas, su plaza de armas no te hará en dudar en sacarte una foto. Una alternativa para visitar un fin de semana con tu familia',
      ubiSitio: 'Centro Poblado de Fácala',
      latiSitio: '-7.722218624540417',
      longSitio: '-79.1584146028836',
      urlSitio: '/assets/sites/centro-poblado-facala.jpg',
      url360Sitio: 'https://panoraven.com/es/embed/L50HqZOMwu',
      estadoSitio: 'Activo',
      atencionSitio: '24 horas'
    },
    {
      idSitio: '4',
      nomSitio: 'Municipalidad de Casa Grande',
      // eslint-disable-next-line max-len
      desSitio: 'Entidad pública que ofrece información del distrito azucarero a todos sus visitantes; actualmente, el represéntate como alcalde es el Ing. Juan Francisco Fernández Gallardo.',
      ubiSitio: 'Av. Plaza Independencia #284',
      latiSitio: '-7.722218624540417',
      longSitio: '-79.1584146028836',
      urlSitio: '/assets/sites/municipalidad-casagrande.jpg',
      url360Sitio: 'https://panoraven.com/es/embed/uKufj6k2Xc',
      estadoSitio: 'Activo',
      atencionSitio: '8:30am - 2:30pm'
    },
    {
      idSitio: '5',
      nomSitio: 'Plaza de Armas de Casa Grande',
      desSitio: 'Plaza histórica de Casa Grande, estuvo desde los inicios de la creación del distrito azucarero.',
      ubiSitio: 'Casa Grande',
      latiSitio: '-7.722218624540417',
      longSitio: '-79.1584146028836',
      urlSitio: 'https://ucarecdn.com/e5fdf793-6786-4e8b-a1aa-2203fc26a9d5/',
      url360Sitio: 'https://panoraven.com/es/embed/uKufj6k2Xc',
      estadoSitio: 'Activo',
      atencionSitio: '24 horas'
    },
    {
      idSitio: '6',
      nomSitio: 'El Chaparral',
      // eslint-disable-next-line max-len
      desSitio: 'El charrapal es una de las atracciones turísticas mas importantes de Casa Grande y que la más protegida por toda la provincia de Ascope.',
      ubiSitio: 'Centro Poblado de Garrapon',
      latiSitio: '-7.722218624540417',
      longSitio: '-79.1584146028836',
      urlSitio: '/assets/sites/quebrada-higueron.jpg',
      url360Sitio: 'https://panoraven.com/es/embed/uKufj6k2Xc',
      estadoSitio: 'Activo',
      atencionSitio: '24 horas'
    },
    {
      idSitio: '7',
      nomSitio: 'Quebrada del Higuerón',
      // eslint-disable-next-line max-len
      desSitio: 'Ésta quebrada es uno de los puntos por donde el hombre antiguo ingresó al Valle Chicama, alternativa para amantes de la naturaleza, exploración, aventuras y experencia en grupo',
      ubiSitio: 'Centro Poblado de Mocan',
      latiSitio: '-7.722218624540417',
      longSitio: '-79.1584146028836',
      urlSitio: '/assets/sites/quebrada-higueron.jpg',
      url360Sitio: 'https://panoraven.com/es/embed/uKufj6k2Xc',
      estadoSitio: 'Activo',
      atencionSitio: '24 horas'
    },
    ];

  headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  //listar
  getSitios(){
    return this.http.get('https://tourscg.com/admin/api/sites/getSite.php');
  }

  //buscar
  getSitiosById(idSitio: string){
    return this.http.get('https://tourscg.com/admin/api/sites/getSiteById.php?idSitio='+idSitio);
  }
}
