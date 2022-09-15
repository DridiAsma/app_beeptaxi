import { Component, OnInit } from '@angular/core';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 name: any="";
 email: any="";
 isLogged: boolean=false;

  constructor() {
if(localStorage.getItem("access_token")){
  this.email=localStorage.getItem("email");
  this.name=localStorage.getItem("name");
}else{
  this.isLogged = false;
}
  }

  ngOnInit(): void {}



}
