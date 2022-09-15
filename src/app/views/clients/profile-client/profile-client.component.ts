import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {

  name: any ="";
  email: any ="";
  prenom: any ="";
  telephone: any="";
  isLogged: boolean=false;

  constructor() {

    if(localStorage.getItem("token")){
      this.name=localStorage.getItem("name");
      this.prenom=localStorage.getItem("prenom");
      this.telephone=localStorage.getItem("telephone");
      this.email=localStorage.getItem("email");
    }else{
      this.isLogged = false;
    }

  }


  ngOnInit(): void {}

}
