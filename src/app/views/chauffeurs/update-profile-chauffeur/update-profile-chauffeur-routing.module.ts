import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProfileChauffeurComponent } from './update-profile-chauffeur.component';

const routes: Routes = [
  {path:'',component:UpdateProfileChauffeurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateProfileChauffeurRoutingModule { }
