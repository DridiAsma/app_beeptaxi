import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Snotify } from 'ng-snotify';
import { ToastrService } from 'ngx-toastr';
import { AuthclientService } from '../../services/authclient.service';

@Component({
  selector: 'app-resst-password',
  templateUrl: './resst-password.component.html',
  styleUrls: ['./resst-password.component.css']
})

export class ResstPasswordComponent implements OnInit {

  public error: any = [];
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null

  }

  constructor(
    private route:ActivatedRoute,
    private serv: AuthclientService,
    private router:Router,
    private  toastr: ToastrService) {

    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
   }

  onSubmit(){

    this.serv.restPass(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),

    )
  }
  ngOnInit(): void {}


  handleResponse(data: any){
    this.toastr.success("Something went wrong", "Error");
    this.router.navigateByUrl('/client/login');
  }


  handleError(error: any){
   this.toastr.error = error.error.errors;
    // this.toastr.error("Something went wrong", "Error");
  }


}
