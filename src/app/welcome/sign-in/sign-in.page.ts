import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { WelcomeService } from '../welcome.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  userForm: FormGroup;
  successMsg = '';
  errorMsg = '';

  // eslint-disable-next-line @typescript-eslint/naming-convention
  error_msg = {
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

  signIn(value) {
    this.welcomeService.signinUser(value)
      .then(async (response) => {
        console.log(response);
        localStorage.setItem('ingresado', 'true');
        this.router.navigateByUrl('home');
        this.userForm.reset();
        this.errorMsg = 'Credenciales Incorrectas!!';
        const toast = await this.toastController.create({
          message: 'Bienvenido de nuevo a Travel Cg',
          duration: 2000
        });
        toast.present();
      }, _error => {
        this.errorMsg = 'Error: Las credenciales son incorrectas. Intente nuevamente o puede crearse una nueva cuenta';
      });
  }

  goToRegistrate() {
    this.router.navigateByUrl('welcome/sign-up');
  }
}
