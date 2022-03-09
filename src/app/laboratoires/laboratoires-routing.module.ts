import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoiresPage } from './laboratoires.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoiresPage
  },

  {
    path: 'examens',
    loadChildren: () => import('./examens/examens.module').then( m => m.ExamensPageModule)
  },
  {
    path: 'exm',
    loadChildren: () => import('./exm/exm.module').then( m => m.ExmPageModule)
  },
 
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoiresPageRoutingModule {}
