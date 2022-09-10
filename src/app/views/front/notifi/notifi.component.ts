import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-notifi',
  templateUrl: './notifi.component.html',
  styleUrls: ['./notifi.component.css']
})
 export class NotifiComponent implements OnInit {

  show: any;
  async: any;
  json: any;

 constructor(private messagingService: MessagingService) { }

  // requestPermission() {
  //   this.afMessaging.requestPermission
  //     .pipe(mergeMapTo(this.afMessaging.tokenChanges))
  //     .subscribe(
  //       (token) => {
  //         console.log('Permission granted! Save to the server!', token); },
  //       (error) => { console.error(error); },
  //     );
  // }



  ngOnInit(): void {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.show = this.messagingService.currentMessage

  //   this.listen();
  }

  // requestPermission() {
  //   this.angularFireMessaging.requestToken.subscribe(
  //     (token: any) => {
  //       console.log(token);
  //     });
  // }

 }


