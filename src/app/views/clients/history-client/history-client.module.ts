import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryClientRoutingModule } from './history-client-routing.module';
import { HistoryClientComponent } from './history-client.component';


@NgModule({
  declarations: [
    HistoryClientComponent
  ],
  imports: [
    CommonModule,
    HistoryClientRoutingModule
  ]
})
export class HistoryClientModule { }
