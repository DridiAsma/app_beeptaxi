import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-chauffeurs',
  templateUrl: './profile-chauffeurs.component.html',
  styleUrls: ['./profile-chauffeurs.component.css']
})
export class ProfileChauffeursComponent implements OnInit {

  nom: any ="";
  prenom: any ="";
  tele: any="";
  email: any="";
  gendre: any="";
  emplacement: any="";
  type_vehicules: any="";
  marque: any="";
  model: any="";
  types_paiement: any="";
  nbr_place: any="";
  cinNum: any="";
  numPermis: any="";
  numAss: any="";
  numBadg: any="";
  numCartCir: any="";
  isLogged: boolean=false;

  constructor() {
    if(localStorage.getItem("tokens")){

      this.nom=localStorage.getItem("nom");
      this.prenom=localStorage.getItem("prenom");
      this.tele=localStorage.getItem("tele");
      this.email=localStorage.getItem("email");
      this.gendre=localStorage.getItem("gendre");
      this.emplacement=localStorage.getItem("emplacement");
      this.type_vehicules=localStorage.getItem("type_vehicules");
      this.marque=localStorage.getItem("marque");
      this.model=localStorage.getItem("model");
      this.types_paiement=localStorage.getItem("types_paiement");
      this.nbr_place=localStorage.getItem("nbr_place");
      this.cinNum=localStorage.getItem("cinNum");
      this.numPermis=localStorage.getItem("numPermis");
      this.numAss=localStorage.getItem("numAss");
      this.numBadg=localStorage.getItem("numBadg");
      this.numCartCir=localStorage.getItem("numCartCir");

    }else{
      this.isLogged = false;
    }
   }

  ngOnInit(): void {}

}
