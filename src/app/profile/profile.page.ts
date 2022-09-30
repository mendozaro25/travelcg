import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome/welcome.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  email: string;

  constructor(
    private router: Router,
    private welcomeService: WelcomeService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.welcomeService.userDetails().subscribe(response => {
      if (response !== null) {
        this.email = response.email;
      }
    }, error => {
      console.log(error);
    });
  }

  signOut() {
    this.welcomeService.signoutUser()
      .then(async res => {
        localStorage.removeItem('ingresado');
        this.router.navigateByUrl('welcome');
        const toast = await this.toastController.create({
          message: '¡NOS VEMOS PRONTO!',
          duration: 4000,
          icon: 'hand-left-sharp',
          color: 'secondary',
        });
        toast.present();
      })
      .catch(error => {
        console.log(error);
      });
  }
}
