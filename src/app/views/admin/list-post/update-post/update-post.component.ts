import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PaiementService } from 'src/app/views/services/paiement.service';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  files: any;
  imageDirectoryPath:any = 'http://127.0.0.1:8000/storage/'
  modifForm = new UntypedFormGroup({
    titre: new UntypedFormControl(''),
    description:new UntypedFormControl(''),
    jour: new UntypedFormControl(''),
    images: new UntypedFormControl(''),
    
  });
 



   constructor(private dataserv:PaiementService,
    private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
    private route:Router,
    private router:ActivatedRoute) { }

   ngOnInit(): void {
     this.editPost();
   
  }

  editPost(){
    this.dataserv.afficherblog(this.router.snapshot.params['id']).subscribe(
      (result: any) =>{
        this.modifForm = new UntypedFormGroup({
          description: new UntypedFormControl(result['description']),
          jour: new UntypedFormControl(result['jour']),
          titre: new UntypedFormControl(result['titre']),
          images: new UntypedFormControl(result['imageDirectoryPath']),
        });
    });
  }

 onSubmit(){
  console.log( this.modifForm.value);
   this.dataserv.modifierblog( this.router.snapshot.params['id'],
   this.modifForm.value).subscribe(result =>
   {
    console.log(result);
    this.toastr.success("Saved successfully", "Success");
    this.route.navigate(['/admin/listblog'])
   })
  
   }

   


   
}
