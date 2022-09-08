// import { CommonModule } from '@angular/common';
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
import { AlertadminComponent } from './views/admin/alertadmin/alertadmin.component';
import { BlogComponent } from './views/front/blog/blog.component';


import { ListPostComponent } from './views/admin/list-post/list-post.component';
import { MapadminComponent } from './views/admin/mapadmin/mapadmin.component';
import { DetailleclientComponent } from './views/admin/detailleclient/detailleclient.component';
import { NoteStarComponent } from './views/admin/note-star/note-star.component';
import { CodepromoComponent } from './views/admin/codepromo/codepromo.component';
import { ProfileComponent } from './views/admin/profile/profile.component';
import { ContactComponent } from './views/front/contact/contact.component';
import { ReservationComponent } from './views/front/reservation/reservation.component';
import { ListeContactComponent } from './views/admin/liste-contact/liste-contact.component';
import { ListTypevehiculeComponent } from './views/admin/list-typevehicule/list-typevehicule.component';
import { ListerequeteChauffeurComponent } from './views/admin/listerequete-chauffeur/listerequete-chauffeur.component';
import { ListerequeteClientComponent } from './views/admin/listerequete-client/listerequete-client.component';

import { AngularFireModule } from '@angular/fire/compat';
import { NotifiComponent } from './views/front/notifi/notifi.component';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AngularFireDatabaseModule } from"@angular/fire/compat/database";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { MessagingService } from './views/services/messaging.service';
import { AsyncPipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    MapComponent,
    AddblogComponent,
    AllchauffeurComponent,
    TypevehicleComponent,
    AllclientComponent,
    AlertadminComponent,
    AppComponent,
    TypevehicleComponent,
    ProfileComponent,
    NoteStarComponent,
    DetailleclientComponent,
    MapComponent,
    MapadminComponent,
    CommandeComponent,
    ReservationComponent,
    ListeContactComponent,
    ListerequeteClientComponent,
    ListerequeteChauffeurComponent,
    BlogComponent,
    AddblogComponent,
    ListPostComponent,
    ListTypevehiculeComponent,
    NotifiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // CommonModule,
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
   ToastrModule.forRoot({timeOut: 5000, positionClass: 'toast-top-right', preventDuplicates: true,}),
   AngularFireModule.initializeApp(environment.firebase)
   



  ],
  providers: [AsyncPipe, MessagingService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
