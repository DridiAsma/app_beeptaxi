"use strict";(self.webpackChunkfront_appbee=self.webpackChunkfront_appbee||[]).push([[628],{8628:(M,c,r)=>{r.r(c),r.d(c,{CommandeModule:()=>b});var p=r(6895),d=r(4416),n=r(433),e=r(8256),m=r(3349),u=r(7185),g=r(918);const h=[{path:"",component:(()=>{class o{constructor(t,i,l,a){this.ngZone=t,this.formBuilder=i,this.addService=l,this.toastr=a,this.Latitude="",this.Longitude="",this.time="",this.distance="",this.options={mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!0,disableDefaultUI:!0,disableDoubleClickZoom:!0,zoom:12},this.togglePlacesSearch=!1}ngOnInit(){this.form=this.buildForm(),this.ds=new google.maps.DirectionsService,this.dr=new google.maps.DirectionsRenderer({map:null,suppressMarkers:!0}),navigator.geolocation.getCurrentPosition(t=>{this.center={lat:t.coords.latitude,lng:t.coords.longitude},this.destination=this.center,this.map=new google.maps.Map(document.getElementById("map-canvas"),{...this.options,center:this.destination}),this.map.addListener("tilesloaded",()=>{this.ngZone.run(()=>{this.mapLoaded=!0})}),this.destinationPin=new google.maps.Marker({position:this.destination,icon:{url:"assets/photo/imgs/destination_custom_pin.svg",anchor:new google.maps.Point(20,10),scaledSize:new google.maps.Size(50,50)},map:this.map}),this.map.addListener("click",i=>{this.showMapPill=!1})})}setRoutePolyline(){let t={origin:this.source,destination:this.destination,travelMode:google.maps.TravelMode.DRIVING};this.ds.route(t,(i,l)=>{this.dr.setOptions({suppressPolylines:!1,map:this.map}),l==google.maps.DirectionsStatus.OK&&(this.dr.setDirections(i),this.ngZone.run(()=>{let a=i.routes[0].legs[0];this.distance=a.distance.text,this.time=a.duration.text}))})}handleAddressChange(t){const i=t.geometry.location.lat(),l=t.geometry.location.lng();this.Latitude=t.geometry.location.lat(),this.Longitude=t.geometry.location.lng(),this.source={lat:i,lng:l},this.sourcePin?this.sourcePin.setPosition(this.source):(this.sourcePin=new google.maps.Marker({position:this.source,icon:{url:"assets/photo/imgs/truck_pin.svg",anchor:new google.maps.Point(20,10),scaledSize:new google.maps.Size(50,50)},animation:google.maps.Animation.DROP,map:this.map}),this.sourcePin.addListener("click",a=>{this.showMapPill=!0,this.onCenterMap()})),this.setRoutePolyline()}onCenterMap(){this.map.panTo(this.source)}clearPlacesField(){this.placesText=""}toggleSearch(){this.togglePlacesSearch=!this.togglePlacesSearch}getCommande(){this.addService.indexCommande().subscribe(t=>{console.log(t),this.commandes=t})}buildForm(){return new n.cw({chauffeur_id:new n.NI("",[n.kI.required]),type_vehicules:new n.NI("taxi"),types_paiment:new n.NI("",[n.kI.required]),nbr_persone:new n.NI("",[n.kI.required]),texts:new n.NI(""),prixclient:new n.NI("",[n.kI.required]),codepromo:new n.NI(""),statut:new n.NI("",[n.kI.required]),duree:new n.NI("",[n.kI.required])})}onSubmit(){this.saveCommande()}saveCommande(){if(this.form.valid){const t=this.getModel();this.addService.ajouterCommande(t).subscribe(()=>this.onSaveClient(),i=>{this.toastr.error("Something went wrong","Error")},()=>{this.toastr.info("Informations compl\xe9t\xe9es","En compl\xe9ment")})}}onSaveClient(){this.toastr.success("Enregistr\xe9 avec succ\xe8s","Success"),this.form.reset()}getModel(){const t=this.form.getRawValue();return{chauffeur_id:t.chauffeur_id,type_vehicules:t.type_vehicules,types_paiment:t.types_paiment,nbr_persone:t.nbr_persone,texts:t.texts,prixclient:t.prixclient,codepromo:t.codepromo,statut:t.statut,duree:t.duree}}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275directiveInject(n.qu),e.\u0275\u0275directiveInject(m.N),e.\u0275\u0275directiveInject(u._W))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["app-commande"]],decls:162,vars:4,consts:[[1,"text-center"],[1,"title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6"],[1,"ride-box"],[1,"user-details"],[1,"input-box","col-lg-12"],[1,"details"],["type","search","ngx-google-places-autocomplete","",3,"ngModel","ngModelChange","onAddressChange"],["placesRef","ngx-places"],[1,"gender-details"],["for","walk",1,"radio-tile-label"],[1,"radio-tile-group"],[1,"input-container"],["id","walk","type","radio","value","taxi","name","radio","formControlName","type_vehicules",1,"radio-button"],[1,"radio-tile"],[1,"icon","walk-icon"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 576 512"],["d","M352 0C369.7 0 384 14.33 384 32V64L384 64.15C422.6 66.31 456.3 91.49 469.2 128.3L504.4 228.8C527.6 238.4 544 261.3 544 288V480C544 497.7 529.7 512 512 512H480C462.3 512 448 497.7 448 480V432H128V480C128 497.7 113.7 512 96 512H64C46.33 512 32 497.7 32 480V288C32 261.3 48.36 238.4 71.61 228.8L106.8 128.3C119.7 91.49 153.4 66.31 192 64.15L192 64V32C192 14.33 206.3 0 224 0L352 0zM197.4 128C183.8 128 171.7 136.6 167.2 149.4L141.1 224H434.9L408.8 149.4C404.3 136.6 392.2 128 378.6 128H197.4zM128 352C145.7 352 160 337.7 160 320C160 302.3 145.7 288 128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352zM448 288C430.3 288 416 302.3 416 320C416 337.7 430.3 352 448 352C465.7 352 480 337.7 480 320C480 302.3 465.7 288 448 288z"],["id","drive","type","radio","value","vtc","formControlName","type_vehicules","name","radio",1,"radio-button"],[1,"icon","car-icon"],["xmlns","http://www.w3.org/2000/svg","width","512","height","512","viewBox","0 0 512 512"],["d","M469.71,234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288,112,256,112s-88,4-117.36,18.63-38.75,52.52-50.27,70S49.62,224.87,42.29,234.6,29.8,305.84,32.94,336s9,48,9,48h86c14.08,0,18.66-5.29,47.46-8C207,373,238,372,256,372s50,1,81.58,4c28.8,2.73,33.53,8,47.46,8h85s5.86-17.84,9-48S477,244.33,469.71,234.6Z",2,"fill","none","stroke","#000","stroke-linecap","round","stroke-linejoin","round","stroke-width","32px"],["x","400","y","384","width","56","height","16",2,"fill","none","stroke","#000","stroke-linecap","round","stroke-linejoin","round","stroke-width","32px"],["x","56","y","384","width","56","height","16",2,"fill","none","stroke","#000","stroke-linecap","round","stroke-linejoin","round","stroke-width","32px"],["d","M364.47,309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279,288,256.2,288s-33.17,1.64-57.61,4.81-42.79,8.81-50.66,16.35C136.12,320.6,153.42,333.44,167,335c13.16,1.5,39.47.95,89.31.95s76.15.55,89.31-.95C359.18,333.35,375.24,321.4,364.47,309.16Z"],["d","M431.57,243.05a3.23,3.23,0,0,0-3.1-3c-11.81-.42-23.8.42-45.07,6.69a93.88,93.88,0,0,0-30.08,15.06c-2.28,1.78-1.47,6.59,1.39,7.1A455.32,455.32,0,0,0,407.53,272c10.59,0,21.52-3,23.55-12.44A52.41,52.41,0,0,0,431.57,243.05Z"],["d","M80.43,243.05a3.23,3.23,0,0,1,3.1-3c11.81-.42,23.8.42,45.07,6.69a93.88,93.88,0,0,1,30.08,15.06c2.28,1.78,1.47,6.59-1.39,7.1A455.32,455.32,0,0,1,104.47,272c-10.59,0-21.52-3-23.55-12.44A52.41,52.41,0,0,1,80.43,243.05Z"],["x1","432","y1","192","x2","448","y2","192",2,"fill","none","stroke","#000","stroke-linecap","round","stroke-linejoin","round","stroke-width","32px"],["x1","64","y1","192","x2","80","y2","192",2,"fill","none","stroke","#000","stroke-linecap","round","stroke-linejoin","round","stroke-width","32px"],["d","M78,211s46.35-12,178-12,178,12,178,12",2,"fill","none","stroke","#000","stroke-linecap","round","stroke-linejoin","round","stroke-width","32px"],["for","drive",1,"radio-tile-label"],["id","transfert","value","transfert","type","radio","formControlName","type_vehicules","name","radio",1,"radio-button"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24"],["d","M20.57,10.66C20.43,10.26,20.05,10,19.6,10h-7.19c-0.46,0-0.83,0.26-0.98,0.66L10,14.77l0.01,5.51 c0,0.38,0.31,0.72,0.69,0.72h0.62C11.7,21,12,20.62,12,20.24V19h8v1.24c0,0.38,0.31,0.76,0.69,0.76h0.61 c0.38,0,0.69-0.34,0.69-0.72L22,18.91v-4.14L20.57,10.66z M12.41,11h7.19l1.03,3h-9.25L12.41,11z M12,17c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S12.55,17,12,17z M20,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S20.55,17,20,17z"],["points","14,9 15,9 15,3 7,3 7,8 2,8 2,21 3,21 3,9 8,9 8,4 14,4"],["height","2","width","2","x","5","y","11"],["height","2","width","2","x","10","y","5"],["height","2","width","2","x","5","y","15"],["height","2","width","2","x","5","y","19"],["for","transfert",1,"radio-tile-label"],[1,"input-box","col-lg-10"],["type","number","formControlName","nbr_persone"],["type","date","formControlName","duree"],["type","text","placeholder","Text..","formControlName","texts"],["type","text","placeholder","0A0..","formControlName","codepromo"],["type","text","placeholder","Nom Chauffeur..","formControlName","chauffeur_id"],["type","number","placeholder","300D..","formControlName","prixclient"],[1,"input-box"],["formControlName","types_paiment",1,"great-input-style","form-control"],["value","espaces"],["value","carte"],[1,"form-check"],["type","checkbox","id","exampleCheck1","formControlName","statut",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label"],[1,"col-lg-5"],[1,"col-lg-12"],[1,"center"],[1,"info-field"],[1,"input-group"],[1,"input-group-prepend"],["id","",1,"input-group-text"],["id","map-canvas",2,"width","120%","height","900px","z-index","0"],["map",""],[1,"button","col-lg-3"],["type","submit","value","Envoyer"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"h2"),e.\u0275\u0275text(3,"Cr\xe9er votre commande"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275element(4,"br")(5,"br")(6,"br")(7,"br"),e.\u0275\u0275elementStart(8,"form",2),e.\u0275\u0275listener("ngSubmit",function(){return i.onSubmit()}),e.\u0275\u0275elementStart(9,"div",3)(10,"div",4)(11,"div",5)(12,"div",3)(13,"div",6)(14,"div",7)(15,"span",8),e.\u0275\u0275text(16,"Rechercher.."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"input",9,10),e.\u0275\u0275listener("ngModelChange",function(a){return i.placesText=a})("onAddressChange",function(a){return i.handleAddressChange(a)}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(19,"div",6),e.\u0275\u0275element(20,"br")(21,"br"),e.\u0275\u0275elementStart(22,"div",11)(23,"span",12),e.\u0275\u0275text(24,"Types de v\xe9hicules"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"div",13)(26,"div",14),e.\u0275\u0275element(27,"input",15),e.\u0275\u0275elementStart(28,"div",16)(29,"div",17),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(30,"svg",18),e.\u0275\u0275element(31,"path",19),e.\u0275\u0275elementEnd()(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(32,"label",12),e.\u0275\u0275text(33,"Taxi"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(34,"div",14),e.\u0275\u0275element(35,"input",20),e.\u0275\u0275elementStart(36,"div",16)(37,"div",21),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(38,"svg",22),e.\u0275\u0275element(39,"path",23)(40,"rect",24)(41,"rect",25)(42,"path",26)(43,"path",27)(44,"path",28)(45,"line",29)(46,"line",30)(47,"path",31),e.\u0275\u0275elementEnd()(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(48,"label",32),e.\u0275\u0275text(49,"VTC"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(50,"div",14),e.\u0275\u0275element(51,"input",33),e.\u0275\u0275elementStart(52,"div",16)(53,"div",21),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(54,"svg",34),e.\u0275\u0275element(55,"path",35)(56,"polygon",36)(57,"rect",37)(58,"rect",38)(59,"rect",39)(60,"rect",40),e.\u0275\u0275elementEnd()(),e.\u0275\u0275namespaceHTML(),e.\u0275\u0275elementStart(61,"label",41),e.\u0275\u0275text(62,"Transfert"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275element(63,"br")(64,"br"),e.\u0275\u0275elementStart(65,"div",42)(66,"span",8),e.\u0275\u0275text(67,"Nombre de personne"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(68,"input",43),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(69,"br")(70,"br")(71,"br")(72,"br")(73,"br"),e.\u0275\u0275elementStart(74,"div",42)(75,"span",8),e.\u0275\u0275text(76,"Date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(77,"input",44),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(78,"br")(79,"br")(80,"br")(81,"br")(82,"br"),e.\u0275\u0275elementStart(83,"div",7)(84,"span",8),e.\u0275\u0275text(85,"Commantaires"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(86,"input",45),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(87,"br")(88,"br")(89,"br")(90,"br")(91,"br"),e.\u0275\u0275elementStart(92,"div",7)(93,"span",8),e.\u0275\u0275text(94,"Code promo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(95,"input",46),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(96,"br")(97,"br")(98,"br")(99,"br")(100,"br"),e.\u0275\u0275elementStart(101,"div",7)(102,"span",8),e.\u0275\u0275text(103,"Liste un chauffeur"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(104,"input",47),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(105,"br")(106,"br")(107,"br")(108,"br")(109,"br"),e.\u0275\u0275elementStart(110,"div",7)(111,"span",8),e.\u0275\u0275text(112,"Ajouter un prix"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(113,"input",48),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(114,"br")(115,"br")(116,"br")(117,"br")(118,"br"),e.\u0275\u0275elementStart(119,"div",49)(120,"span",8),e.\u0275\u0275text(121,"M\xe9thode de paiment"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(122,"select",50)(123,"option",51),e.\u0275\u0275text(124,"Esp\xe8ces"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(125,"option",52),e.\u0275\u0275text(126,"Cartes"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275element(127,"br"),e.\u0275\u0275elementStart(128,"div",53),e.\u0275\u0275element(129,"input",54),e.\u0275\u0275elementStart(130,"label",55),e.\u0275\u0275text(131,"Vous confirmez que vous acceptez les conditions. "),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275element(132,"br")(133,"br")(134,"br")(135,"br"),e.\u0275\u0275elementStart(136,"div",56)(137,"div",5)(138,"div",3)(139,"div",57)(140,"div",58),e.\u0275\u0275element(141,"br")(142,"br"),e.\u0275\u0275elementStart(143,"div",59)(144,"div",60)(145,"div",61)(146,"span",62),e.\u0275\u0275text(147),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(148,"br"),e.\u0275\u0275elementStart(149,"div",61)(150,"span",62),e.\u0275\u0275text(151),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275element(152,"br")(153,"br")(154,"br")(155,"br")(156,"br"),e.\u0275\u0275elementStart(157,"div",49),e.\u0275\u0275element(158,"div",63,64),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(160,"div",65),e.\u0275\u0275element(161,"input",66),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(8),e.\u0275\u0275property("formGroup",i.form),e.\u0275\u0275advance(9),e.\u0275\u0275property("ngModel",i.placesText),e.\u0275\u0275advance(130),e.\u0275\u0275textInterpolate1("Distance : ",i.distance,""),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1("Duree : ",i.time,""))},dependencies:[n._Y,n.YN,n.Kr,n.Fj,n.wV,n.Wl,n.EJ,n._,n.JJ,n.JL,n.On,n.sg,n.u,g.GooglePlaceDirective],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.exampleCheck1[_ngcontent-%COMP%]{background:#FFA500}*[_ngcontent-%COMP%]{box-sizing:border-box;font-family:Helvetica Neue,sans-serif}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.radio-tile-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.radio-tile-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{position:relative;height:10rem;width:11rem;margin:.5rem}.radio-tile-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%;margin:0;cursor:pointer}.radio-tile-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .radio-tile[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;border:2px solid #FFA500;border-radius:5px;padding:1rem;transition:transform .3s ease}.radio-tile-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:orange;width:3rem;height:3rem}.radio-tile-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:orange;font-size:40px}.radio-tile-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .radio-tile-label[_ngcontent-%COMP%]{text-align:center;font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:orange}.radio-tile-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]:checked + .radio-tile[_ngcontent-%COMP%]{background-color:orange;border:5px solid #FFA500;color:#000;transform:scale(1.1)}.radio-tile-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]:checked + .radio-tile[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#000;background-color:orange}.radio-tile-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]:checked + .radio-tile[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.radio-tile-group[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]:checked + .radio-tile[_ngcontent-%COMP%]   .radio-tile-label[_ngcontent-%COMP%]{color:#000;background-color:orange}body[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center;padding:10px;background:linear-gradient(135deg,#FFD700 0%,#FFA500 100%)}.container[_ngcontent-%COMP%]{max-width:700px;width:100%;background-color:#fff;padding:25px 30px;border-radius:5px;box-shadow:0 5px 10px #00000026}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:25px;font-weight:500;position:relative}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:0;height:3px;width:30px;border-radius:5px;background:linear-gradient(135deg,#FFD700 0%,#FFA500 100%)}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;margin:20px 0 12px}form[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{margin-bottom:15px;width:calc(50% - 20px)}form[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   span.details[_ngcontent-%COMP%]{display:block;font-weight:500;margin-bottom:5px}.user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;color:#333;font-size:16px;padding:10px 0;display:block;width:100%}.user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{border-color:orange}form[_ngcontent-%COMP%]   .gender-details[_ngcontent-%COMP%]   .gender-title[_ngcontent-%COMP%]{font-size:10px;font-weight:500}form[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{display:flex;width:80%;margin:14px 0;justify-content:space-between}form[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}form[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:18px;width:18px;border-radius:50%;margin-right:10px;background:#FFA500;border:5px solid transparent;transition:all .3s ease}#dot-1[_ngcontent-%COMP%]:checked ~ .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%], #dot-2[_ngcontent-%COMP%]:checked ~ .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%], #dot-3[_ngcontent-%COMP%]:checked ~ .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]{border-color:#d9d9d9}form[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{display:none}form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{height:45px;margin:35px 0}form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:100%;width:100%;border-radius:5px;border:none;color:#fff;font-size:18px;font-weight:500;letter-spacing:1px;cursor:pointer;transition:all .3s ease;background:linear-gradient(135deg,#FFD700 0%,#FFA500 100%)}form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{background:linear-gradient(-135deg,#FFD700 0%,#FFA500 100%)}@media (max-width: 584px){.container[_ngcontent-%COMP%]{max-width:100%}form[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{margin-bottom:15px;width:100%}form[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]{max-height:300px;overflow-y:scroll}.user-details[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}}@media (max-width: 459px){.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{flex-direction:column}}.great-input-style[_ngcontent-%COMP%]{position:relative;border:none;border-bottom:2px solid #ddd;outline:0;transition:all .3s ease;margin-top:20px;border-radius:0;z-index:0;background:none}.great-input-style[_ngcontent-%COMP%]:focus{outline:0;box-shadow:none}.label-container[_ngcontent-%COMP%]{position:relative;color:#999;top:-25px;z-index:-1;font-family:poppins;transition:all .3s ease}.great-input-style[_ngcontent-%COMP%]:focus, .great-input-style[_ngcontent-%COMP%]:valid{outline:none;border-bottom:1px solid #FFA500}.great-input-style[_ngcontent-%COMP%]:focus + .label-container[_ngcontent-%COMP%], .great-input-style[_ngcontent-%COMP%]:valid + .label-container[_ngcontent-%COMP%]{top:-60px;color:orange}.content-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;width:100%;height:100vh;align-items:center}.files[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:2px dashed #92b0b3;outline-offset:-10px;transition:outline-offset .15s ease-in-out,background-color .15s linear;padding:120px 0 85px 35%;text-align:center!important;margin:0;width:100%!important}.files[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:2px dashed #92b0b3;outline-offset:-10px;transition:outline-offset .15s ease-in-out,background-color .15s linear;border:1px solid #92b0b3}.files[_ngcontent-%COMP%]{position:relative}.files[_ngcontent-%COMP%]:after{pointer-events:none;position:absolute;top:60px;left:0;width:50px;right:0;height:56px;content:"";display:block;margin:0 auto;background-size:100%;background-repeat:no-repeat}']}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.Bz.forChild(h),d.Bz]}),o})(),b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.ez,C,g.GooglePlaceModule]}),o})()}}]);