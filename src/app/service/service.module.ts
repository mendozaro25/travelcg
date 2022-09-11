import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicePageRoutingModule } from './service-routing.module';

import { ServicePage } from './service.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

// Https Client
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicePageRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  declarations: [ServicePage]
})
export class ServicePageModule {}
