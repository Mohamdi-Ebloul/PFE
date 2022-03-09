import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExmPageRoutingModule } from './exm-routing.module';

import { ExmPage } from './exm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExmPageRoutingModule
  ],
  declarations: [ExmPage]
})
export class ExmPageModule {
  id_lab:any;
nom_lab:any;
nom:any;
id:any;
id_s:any;
tel_lab:any;
}
