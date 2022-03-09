import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContacterPage } from './contacter.page';

const routes: Routes = [
  {
    path: '',
    component: ContacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContacterPageRoutingModule {}
