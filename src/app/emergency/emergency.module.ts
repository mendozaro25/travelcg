import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyPageRoutingModule } from './emergency-routing.module';

import { EmergencyPage } from './emergency.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    EmergencyPageRoutingModule
  ],
  declarations: [EmergencyPage]
})
export class EmergencyPageModule {}
