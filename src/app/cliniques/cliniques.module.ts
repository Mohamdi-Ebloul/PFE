import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CliniquesPageRoutingModule } from './cliniques-routing.module';

import { CliniquesPage } from './cliniques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CliniquesPageRoutingModule
  ],
  declarations: [CliniquesPage]
})
export class CliniquesPageModule {
  id_cl: any;
  nom_cl :any;
  tel_cl :any;
  heure_ov_cl :any;
  heure_f_cl:any;
  type:any;
  url:any;
  image:any;

}
