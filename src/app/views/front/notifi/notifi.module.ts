import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifiRoutingModule } from './notifi-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotifiRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule


  ],
 // providers: [MessagingService,AsyncPipe],
})
export class NotifiModule{ }
