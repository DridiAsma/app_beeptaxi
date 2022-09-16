import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthchauffeurService } from '../../services/authchauffeur.service';

@Component({
  selector: 'app-detailles-chauffeur',
  templateUrl: './detailles-chauffeur.component.html',
  styleUrls: ['./detailles-chauffeur.component.css']
})
export class DetaillesChauffeurComponent implements OnInit {


  imageDirectoryPath:any = 'http://127.0.0.1:8000/uploads/flutterimgs/';
  chauffeurs!: any;
  constructor(
    private dataservce:AuthchauffeurService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.detaillsChauf();
  }

  detaillsChauf(){
    
    this.dataservce.editIdChauf(this.router.snapshot.params['id']).subscribe(
      res => {
        this.chauffeurs = res;
      },
      err =>{
        console.log(err);
      });
      
  }



}
