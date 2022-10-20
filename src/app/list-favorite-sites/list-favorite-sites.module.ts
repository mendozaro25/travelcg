import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFavoriteSitesPageRoutingModule } from './list-favorite-sites-routing.module';

import { ListFavoriteSitesPage } from './list-favorite-sites.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFavoriteSitesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListFavoriteSitesPage]
})
export class ListFavoriteSitesPageModule {}
