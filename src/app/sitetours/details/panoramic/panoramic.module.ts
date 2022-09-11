import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanoramicPageRoutingModule } from './panoramic-routing.module';

import { PanoramicPage } from './panoramic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanoramicPageRoutingModule
  ],
  declarations: [PanoramicPage]
})
export class PanoramicPageModule {}
