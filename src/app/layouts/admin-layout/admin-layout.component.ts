import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {



  constructor(private ads:AuthadminService, private route:Router) { }

  ngOnInit(): void {}


  logout(){
    localStorage.removeItem('access_token')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    this.route.navigate(['/admin/login'])
  }

}
