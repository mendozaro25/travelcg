import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutesmapPageRoutingModule } from './routesmap-routing.module';

import { RoutesmapPage } from './routesmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutesmapPageRoutingModule
  ],
  declarations: [RoutesmapPage]
})
export class RoutesmapPageModule {}
