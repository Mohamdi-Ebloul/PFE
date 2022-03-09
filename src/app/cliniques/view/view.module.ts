import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPageRoutingModule } from './view-routing.module';

import { ViewPage } from './view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPageRoutingModule
  ],
  declarations: [ViewPage]
})
export class ViewPageModule {
  id_cl: any;
  nom_cl :any;
  tel_cl :any;
  heure_ov_cl :any;
  heure_f_cl:any;
  type:any;
  id_dr:any;
  id_sp:any;
  nom_doc:any;
  nom_sp:any;
  image:any;
  jour:any;
}
