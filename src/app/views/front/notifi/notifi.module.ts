import { NgModule } from '@angular/core' ;
import { AsyncPipe, CommonModule } from '@angular/common';
import { NotifiRoutingModule } from './notifi-routing.module';
// import { MessagingService } from '../../services/messaging.service';
// import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireModule } from '@angular/fire/compat';
// import { environment } from 'src/environments/environment';
//import{AngularFireMessagingModule}from'@angular/fire/messaging';
// import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
// import { AsyncPipe } from '@angular/common';
// import { MessagingService } from '../../services/messaging.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotifiRoutingModule,
  //   // AngularFireMessagingModule,
  //   // AngularFireDatabaseModule,
  //   // AngularFireAuthModule,
  //   // AngularFireMessagingModule

  // //   AngularFireModule.initializeApp({
  // //     apiKey: "AIzaSyDkrQGrokNIAk6nfrQ61zHRZQ_5466HkBY",
  // //  authDomain: "angularpuhweb.firebaseapp.com",
  // //  databaseURL: "https://angularpuhweb.firebaseio.com",
  // //  projectId: "angularpuhweb",
  // //  storageBucket: "angularpuhweb.appspot.com",
  // //  messagingSenderId: "947079766268",
  // //  appId: "1:947079766268:web:e32a290cfef0bdc4fff779",
  // //   }),
  //   AngularFireMessagingModule


  ],
  providers: [AsyncPipe]
})
export class NotifiModule{ }
