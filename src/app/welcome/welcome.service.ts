import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  locations = [
    {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [
        8.293017,
        -62.736924
      ],
    },
    properties:{
      title: 'Mi ubicación',
      image:'../../assets/icon/icono-cg.jpg'
    }
  }
];

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  createUser(value) {
    return new Promise<any>((resolve, reject) => {
      const url = 'http://localhost:6100/cliente/add-cliente';
      const data = {username: value.email, email: value.email, password: value.password};
      const response = fetch(url,{
        method: 'POST',
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    });
    response.then(res => console.log(res));

      this.angularFireAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));
    });
  }

  signinUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));
    });
  }

  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
        this.angularFireAuth.signOut()
          .then(() => {
            console.log('Salir');
            resolve();
          }).catch(() => {
            reject();
          });
      }
    });
  }
  userDetails() {
    return this.angularFireAuth.user;
  }
}
