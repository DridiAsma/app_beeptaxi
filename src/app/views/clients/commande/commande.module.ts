import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'
import { CommandeRoutingModule } from './commande-routing.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    GooglePlaceModule,
  ]
})
export class CommandeModule { }
