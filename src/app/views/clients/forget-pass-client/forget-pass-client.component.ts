import { Component, OnInit } from '@angular/core';
import { AuthclientService } from '../../services/authclient.service';
import {SnotifyService} from 'ng-snotify';
@Component({
  selector: 'app-forget-pass-client',
  templateUrl: './forget-pass-client.component.html',
  styleUrls: ['./forget-pass-client.component.css']
})
export class ForgetPassClientComponent implements OnInit {

  public form = { email: null };
  notify: any;

 constructor(private serv:AuthclientService, private snotifyService: SnotifyService ) { }

 ngOnInit(): void {}

 onSubmit(){
 this.serv.SendPassLink(this.form).subscribe(

   data =>this.handleResponse(data),
   error => this.notify.error(error.error)

 );
 }

  handleResponse(res:any){
    console.log(res)
  this.form.email = null;
}

}
