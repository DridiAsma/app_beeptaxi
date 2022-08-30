import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodepromoRoutingModule } from './codepromo-routing.module';
import { CodepromoComponent } from './codepromo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CodepromoComponent
  ],
  imports: [
    CommonModule,
    CodepromoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CodepromoModule { }
