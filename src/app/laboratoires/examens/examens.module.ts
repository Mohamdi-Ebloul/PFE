import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamensPageRoutingModule } from './examens-routing.module';

import { ExamensPage } from './examens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamensPageRoutingModule
  ],
  declarations: [ExamensPage]
})
export class ExamensPageModule {
id_lab:any;
nom_lab:any;
nom:any;
id:any;
id_s:any;
tel_lab:any;

}
