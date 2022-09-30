import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelPageRoutingModule } from './hotel-routing.module';

import { HotelPage } from './hotel.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

// Https Client
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelPageRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  declarations: [HotelPage]
})
export class HotelPageModule {}
