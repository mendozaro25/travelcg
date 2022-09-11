import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanoramicPage } from './panoramic.page';

const routes: Routes = [
  {
    path: '',
    component: PanoramicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanoramicPageRoutingModule {}
