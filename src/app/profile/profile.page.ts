import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome/welcome.service';
import { Router } from '@angular/router';

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
      .then(res => {
        localStorage.removeItem('ingresado');
        this.router.navigateByUrl('welcome');
      })
      .catch(error => {
        console.log(error);
      });
  }
}
