import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [
 ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
