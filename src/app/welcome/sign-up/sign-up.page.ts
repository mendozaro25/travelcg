import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { WelcomeService } from '../welcome.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  userForm: FormGroup;
  successMsg = '';
  errorMsg = '';

  // eslint-disable-next-line @typescript-eslint/naming-convention
  error_msg = {
    username: [
      {
        type: 'required',
        message: 'Error: Campo obligatorio'
      },
      {
        type: 'minlength',
        message: '*Su usuario debe ser mayor a 8 caracteres'
      }
    ],
    email: [
      {
        type: 'required',
        message: 'Error: Campo obligatorio'
      },
      {
        type: 'pattern',
        message: '*Su email debe tener un formato correcto'
      }
    ],
    password: [
      {
        type: 'required',
        message: 'Error: Campo obligatorio'
      },
      {
        type: 'minlength',
        message: '*Su contraseña debe ser mayor a 6 caracteres'
      }
    ]
  };

  constructor(
    private router: Router,
    private welcomeService: WelcomeService,
    private fb: FormBuilder,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  async signUp(value) {
    this.welcomeService.createUser(value)
      .then(async (_response) => {
        this.errorMsg = '';
        this.successMsg = 'Su usuario ha sido creado!! Es hora de logearse.';
        localStorage.setItem('ingresado', 'true');
        this.router.navigateByUrl('home');
        this.userForm.reset();
        const toast = await this.toastController.create({
          message: 'Bienvenido a Travel Cg',
          duration: 4000,
          icon: 'thumbs-up-sharp',
          color: 'primary'
        });
        toast.present();
      }, async _error => {
        const toast = await this.toastController.create({
          message: 'El usuario y/o email ya existen, intente nuevamente',
          duration: 3500,
          icon: 'alert',
          color: 'danger',
          position: 'top'
        });
        toast.present();
        this.userForm.reset();
      });
  }

  goToLogin() {
    this.router.navigateByUrl('welcome/sign-in');
  }

}
