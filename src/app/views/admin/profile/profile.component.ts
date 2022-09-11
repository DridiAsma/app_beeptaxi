import { Component, OnInit } from '@angular/core';
import { AuthadminService } from 'src/app/views/services/authadmin.service';



export class User {
  name: any;
  email: any;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 user!: User;

  constructor(private ads:AuthadminService) {

    this.ads.profileadmin().subscribe((res:any) => {
      this.user =res;
    })
  }

  ngOnInit(): void {



  }



}
