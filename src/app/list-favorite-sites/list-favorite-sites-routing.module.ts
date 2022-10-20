import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFavoriteSitesPage } from './list-favorite-sites.page';

const routes: Routes = [
  {
    path: '',
    component: ListFavoriteSitesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFavoriteSitesPageRoutingModule {}
