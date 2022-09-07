import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifiComponent } from './notifi.component';

const routes: Routes = [
  {path:'',component:NotifiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifiRoutingModule { }
