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
import { AllchauffeurComponent } from './views/admin/allchauffeur/allchauffeur.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GoogleMapsModule } from '@angular/google-maps';
import { TypevehicleComponent } from './views/admin/typevehicle/typevehicle.component';
import { AllclientComponent } from './views/admin/allclient/allclient.component';


@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    MapComponent,
    AddblogComponent,
    AllchauffeurComponent,
    TypevehicleComponent,
    AllclientComponent,

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
   //AgmDirectionModule,
   GoogleMapsModule,
   GooglePlaceModule,
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
