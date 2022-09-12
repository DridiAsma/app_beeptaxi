import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPassClientComponent } from './forget-pass-client.component';

const routes: Routes = [
  {path:'', component:ForgetPassClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPassClientRoutingModule { }
