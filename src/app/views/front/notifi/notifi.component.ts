import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-notifi',
  templateUrl: './notifi.component.html' ,
  styleUrls: ['./notifi.component.css']
})
export class NotifiComponent implements OnInit {

  constructor(private afMessaging: AngularFireMessaging) { }

  // requestPermission() {
  //   this.afMessaging.requestPermission
  //     .pipe(mergeMapTo(this.afMessaging.tokenChanges))
  //     .subscribe(
  //       (token) => {
  //         console.log('Permission granted! Save to the server!', token); },
  //       (error) => { console.error(error); },
  //     );
  // }
// constructor(private afMessaging: AngularFireMessaging) { }

  ngOnInit(): void {
    this.requestPermission();
  }

 requestPermission() {
  this.afMessaging.requestToken
  .subscribe(
    (token) => {
      console.log("Permission gratend");
      console.log(token);
    },

  (error) => { console.error(error);}
  ); }





//  listen(){}


}
