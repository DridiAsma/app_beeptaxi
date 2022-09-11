import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthclientService } from 'src/app/views/services/authclient.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  name: any ="";
  email:any ="";
  isLogged:boolean=false;
 

  constructor(private clientservice:AuthclientService, private route:Router) {
    if(localStorage.getItem("token")){
      this.name=localStorage.getItem("name");
      this.email=localStorage.getItem("email");

    }else{
      this.isLogged = false;
    }
   }

  ngOnInit(): void {
  }

  status: boolean = false;
  //Sidebar opne
  clickEvent(){
   this.status = true;
}
//Sidebar close
clickEvent2()
{
 this.status = false;
}


/*unction logout*/
logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  this.route.navigate(['/client/login'])
}



}
