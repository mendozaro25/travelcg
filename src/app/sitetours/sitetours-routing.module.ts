import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitetoursPage } from './sitetours.page';

const routes: Routes = [
  {
    path: '',
    component: SitetoursPage
  },
  {
    path: ':idSitio',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitetoursPageRoutingModule {}
