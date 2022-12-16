import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SitetoursPageRoutingModule } from './sitetours-routing.module';
import { SitetoursPage } from './sitetours.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// Https Client
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SitetoursPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SitetoursPage]
})
export class SitetoursPageModule {}
