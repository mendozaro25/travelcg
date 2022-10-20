import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageServicesPageRoutingModule } from './list-page-services-routing.module';

import { ListPageServicesPage } from './list-page-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageServicesPageRoutingModule
  ],
  declarations: [ListPageServicesPage]
})
export class ListPageServicesPageModule {}
