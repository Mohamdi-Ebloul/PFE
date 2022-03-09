import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CliniquesPage } from './cliniques.page';

const routes: Routes = [
  {
    path: '',
    component: CliniquesPage
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then( m => m.DoctorPageModule)
  },
  {
    path: 'mapcl',
    loadChildren: () => import('./mapcl/mapcl.module').then( m => m.MapclPageModule)
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CliniquesPageRoutingModule {}
