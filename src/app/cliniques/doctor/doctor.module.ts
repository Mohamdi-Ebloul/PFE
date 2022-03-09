import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorPageRoutingModule } from './doctor-routing.module';

import { DoctorPage } from './doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorPageRoutingModule
  ],
  declarations: [DoctorPage]
})
export class DoctorPageModule {
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
  url:any;
 
image:any;
}
export class DoctorPageModule2 {
  id_H: any;
  nom_H :any;
  id_cl: any;
  nom_cl :any;
  tel_cl :any;
  heure_ov_cl :any;
  heure_f_cl:any;

  id_dr:any;
  id_sp:any;
  nom_doc:any;
  nom_sp:any;
  image:any;
url:any;

}
