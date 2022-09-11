import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {

  emergencias = [
    {
      id: '1',
      titulo: 'P.N.P CASA GRANDE',
      telefono: '(044) 433008',
      ubicacion: 'Av. Independencia #13761',
      url: '../../assets/image/pnpCasaGrande.jpeg',
      referencia: 'Al lado del cajero Scotiabank'
    },
    {
      id: '2',
      titulo: 'CIA. DE BOMBEROS B-230',
      telefono: '(044) 304732',
      ubicacion: 'Av. Independencia #13761',
      url: '../../assets/image/bomberosCasaGrande.jfif',
      referencia: 'Al lado de la entrada al Casino'
    },
    {
      id: '3',
      titulo: 'SEGURIDAD CIUDADANA',
      telefono: '(044) 439495',
      ubicacion: 'Av. Idependencia #500',
      url: '../../assets/image/seguridadCiudadana.jpg',
      referencia: 'Al lado de la Municipalidad de Casa Grande'
    }
    ];

  constructor() { }

  //listar
  getEmergencias(){
    return [...this.emergencias];
  }

  //agregar
  addEmergencias(titulo: string, telefono: string, ubicacion: string, url: string, referencia: string){
    this.emergencias.push(
    {
      id: this.emergencias.length + 1 + '',
      titulo,
      telefono,
      ubicacion,
      url,
      referencia
    }
    );
  }

  //eliminar
  // eslint-disable-next-line @typescript-eslint/ban-types
  deleteEmergencias(emergenciasID: String){
    this.emergencias = this.emergencias.filter(p => p.id !== emergenciasID);
  }

  //buscar
  getEmergenciasById(emergenciasID: string){
    return{
      ...this.emergencias.find(p => p.id === emergenciasID)
    };
  }
}
