import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileChauffeursComponent } from './profile-chauffeurs.component';

const routes: Routes = [
  {path:'' ,component:ProfileChauffeursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileChauffeursRoutingModule { }
