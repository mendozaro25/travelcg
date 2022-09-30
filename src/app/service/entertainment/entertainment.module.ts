import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntertainmentPageRoutingModule } from './entertainment-routing.module';

import { EntertainmentPage } from './entertainment.page';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntertainmentPageRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  declarations: [EntertainmentPage]
})
export class EntertainmentPageModule {}
