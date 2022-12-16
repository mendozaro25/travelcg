import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'sitetours',
    loadChildren: () => import('./sitetours/sitetours.module').then( m => m.SitetoursPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'emergency',
    loadChildren: () => import('./emergency/emergency.module').then( m => m.EmergencyPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'list-favorite-sites',
    loadChildren: () => import('./list-favorite-sites/list-favorite-sites.module').then( m => m.ListFavoriteSitesPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'list-page-services',
    loadChildren: () => import('./list-page-services/list-page-services.module').then( m => m.ListPageServicesPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: ':rutas',
    loadChildren: () => import('./routesmap/routesmap.module').then( m => m.RoutesmapPageModule),
    canActivate: [IngresadoGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
