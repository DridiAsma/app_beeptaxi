import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { CommandeComponent } from './views/clients/commande/commande.component';
import { MapComponent } from './views/chauffeurs/map/map.component';
import { ToastrModule } from 'ngx-toastr';
import { AddblogComponent } from './views/admin/addblog/addblog.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    MapComponent,
    AddblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
  //   AgmCoreModule.forRoot({apiKey:'AIzaSyCNMgSJml7Zm1_mgLT2Fgw4_vSjGt6hwvs',
  //   libraries: ['places', 'drawing', 'geometry'],
  //  }),
  // AgmDirectionModule,
  // GoogleMapsModule,
  // GooglePlaceModule,
   ToastrModule.forRoot({
    timeOut: 5000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
