import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentsPageRoutingModule } from './medicaments-routing.module';

import { MedicamentsPage } from './medicaments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentsPageRoutingModule
  ],
  declarations: [MedicamentsPage]
})
export class MedicamentsPageModule {
  id_med:any;
  nom_med:any;
  id_ph:any;
  nom_ph:any;
  type:any;
  image:any;
}
export class MedicamentsPageModule2 {
id_ph:any;
  nom_ph:any;
  tel_ph:any;heure_ov_ph:any;heure_f_ph:any;
  url:any;
}