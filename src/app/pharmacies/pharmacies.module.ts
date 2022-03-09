import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmaciesPageRoutingModule } from './pharmacies-routing.module';

import { PharmaciesPage } from './pharmacies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmaciesPageRoutingModule
  ],
  declarations: [PharmaciesPage]
})
export class PharmaciesPageModule {
  id_ph:any;
  nom_ph:any;
  tel_ph:any;heure_ov_ph:any;heure_f_ph:any;
  url:any;
}
