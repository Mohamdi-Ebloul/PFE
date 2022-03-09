import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratoiresPageRoutingModule } from './laboratoires-routing.module';

import { LaboratoiresPage } from './laboratoires.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratoiresPageRoutingModule
  ],
  declarations: [LaboratoiresPage]
})
export class LaboratoiresPageModule {
  id_lab:any;
  nom_lab:any;
  tel_lab:any;
  heure_ov_lab:any;
  heure_f_lab:any;
  url:any;

}
