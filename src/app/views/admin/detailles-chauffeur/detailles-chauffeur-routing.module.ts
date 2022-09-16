import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaillesChauffeurComponent } from './detailles-chauffeur.component';

const routes: Routes = [
  {path:'',component:DetaillesChauffeurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetaillesChauffeurRoutingModule { }
