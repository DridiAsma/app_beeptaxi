import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthclientService } from 'src/app/views/services/authclient.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {
  messageAuthError: any
  datatoken:any

  constructor(private clientservice:AuthclientService, private route:Router, private arouter:ActivatedRoute) { }

  ngOnInit(): void {}

  loginclient(f:any){
    let data=f.value
     this.clientservice.login(data).subscribe(data=>{
       this.datatoken = data

       // this.clientservice.saveToken(this.datatoken.token)
       localStorage.setItem('token',this.datatoken.token);
       localStorage.setItem('email',this.datatoken.user.email);
       localStorage.setItem('name',this.datatoken.user.name);
      this.route.navigate(['/client/commande'])
   } );

  }

}
