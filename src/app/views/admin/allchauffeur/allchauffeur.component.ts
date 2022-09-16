import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-allchauffeur',
  templateUrl: './allchauffeur.component.html',
  styleUrls: ['./allchauffeur.component.css']
})
export class AllchauffeurComponent implements OnInit {

  imageDirectoryPath:any = 'http://127.0.0.1:8000/uploads/flutterimgs/';  ///for image

  public chauffeurs: any ;
  constructor(private ds:DataService,
    private route:Router) {}

  ngOnInit(): void {
    this.getChauffeurData();
  }

  getChauffeurData(){
    this.ds.getAllchauffeur().subscribe((response:any)=>{
      console.log(response)
      this.chauffeurs=response;
    });
  }



  details(id:any){
    this.route.navigate(['/admin/detaille_chauf/'+id]);
  }
}
