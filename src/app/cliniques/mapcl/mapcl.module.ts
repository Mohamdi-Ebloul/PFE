import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapclPageRoutingModule } from './mapcl-routing.module';

import { MapclPage } from './mapcl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapclPageRoutingModule
  ],
  declarations: [MapclPage]
})
export class MapclPageModule {
 id:any;
 url:any;
}
