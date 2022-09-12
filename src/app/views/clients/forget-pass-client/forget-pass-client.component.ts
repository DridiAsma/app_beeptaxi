import { Component, OnInit } from '@angular/core';
import { AuthclientService } from '../../services/authclient.service';

@Component({
  selector: 'app-forget-pass-client',
  templateUrl: './forget-pass-client.component.html',
  styleUrls: ['./forget-pass-client.component.css']
})
export class ForgetPassClientComponent implements OnInit {
  
  public form = { email: null };

 constructor(private serv:AuthclientService ) { }

 ngOnInit(): void {}

 onSubmit(){
 this.serv.SendPassLink(this.form).subscribe(
   data => console.log(data),
   error => console.log(error)
 );
 }

  handleResponse(res:any){
 this.form.email = null;}

}
