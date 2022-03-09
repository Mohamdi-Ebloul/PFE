import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Imbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'laboratoires',
    loadChildren: () => import('./laboratoires/laboratoires.module').then( m => m.LaboratoiresPageModule)
  },
  {
    path: 'cliniques',
    loadChildren: () => import('./cliniques/cliniques.module').then( m => m.CliniquesPageModule)
  },
  {
    path: 'pharmacies',
    loadChildren: () => import('./pharmacies/pharmacies.module').then( m => m.PharmaciesPageModule)
  },
  {
    path: 'hopitaux',
    loadChildren: () => import('./hopitaux/hopitaux.module').then( m => m.HopitauxPageModule)
  },
  {
    path: 'contacter',
    loadChildren: () => import('./contacter/contacter.module').then( m => m.ContacterPageModule)
  },
  
  
    
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
