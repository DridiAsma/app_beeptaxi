import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryClientComponent } from './history-client.component';

const routes: Routes = [
  {path:'', component:HistoryClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryClientRoutingModule { }
