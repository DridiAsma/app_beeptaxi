"use strict";(self.webpackChunkfront_appbee=self.webpackChunkfront_appbee||[]).push([[45],{8045:(x,i,a)=>{a.r(i),a.d(i,{ListerequeteChauffeurModule:()=>C});var l=a(6895),u=a(4416),e=a(8256),d=a(3349),s=a(7185);function m(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",13),e.\u0275\u0275text(1," Espace"),e.\u0275\u0275elementEnd())}function c(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275text(1," Carte"),e.\u0275\u0275elementEnd())}function f(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td",6),e.\u0275\u0275template(4,m,2,0,"div",7),e.\u0275\u0275template(5,c,2,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"td"),e.\u0275\u0275text(7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"td"),e.\u0275\u0275text(9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"td"),e.\u0275\u0275text(11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"td")(13,"a",9),e.\u0275\u0275element(14,"i",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"a",11),e.\u0275\u0275listener("click",function(){const v=e.\u0275\u0275restoreView(n).$implicit,g=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(g.deleteCommande(v.id))}),e.\u0275\u0275element(16,"i",12),e.\u0275\u0275elementEnd()()()}if(2&t){const n=r.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.type_vehicules),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.types_paiment),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!n.types_paiment),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.codepromo),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.duree),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.chauffeur_id)}}const p=[{path:"",component:(()=>{class t{constructor(n,o){this.addService=n,this.toastr=o}ngOnInit(){this.getCommande()}getCommande(){this.addService.indexCommande().subscribe(n=>{console.log(n),this.commandes=n})}deleteCommande(n){this.addService.suppCommande(n).subscribe(()=>{this.toastr.success("Success","Successfully Supprimer"),this.getCommande()},o=>{this.toastr.error("Something went wrong","Error")},()=>{})}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(d.N),e.\u0275\u0275directiveInject(s._W))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-listerequete-chauffeur"]],decls:23,vars:1,consts:[[1,"card"],[1,"card-header"],[1,"card-body","table-border-style"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"text-center"],["class","alert alert-success","role","alert",4,"ngIf"],["class","alert alert-warning","role","alert",4,"ngIf"],["data-toggle","tooltip",1,"btn","btn-outline-warning","mr-1"],[1,"fas","fa-eye"],["data-toggle","tooltip","data-confirm","Are You Sure?|This action can not be undone. Do you want to continue?",1,"btn","btn-outline-danger","btn-action",3,"click"],[1,"fas","fa-trash"],["role","alert",1,"alert","alert-success"],["role","alert",1,"alert","alert-warning"]],template:function(n,o){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"h3"),e.\u0275\u0275text(3,"Liste Chauffeur"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",2)(5,"div",3)(6,"table",4)(7,"thead")(8,"tr")(9,"th"),e.\u0275\u0275text(10,"Type Voiture"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"th"),e.\u0275\u0275text(12,"Paiment"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"th"),e.\u0275\u0275text(14,"Code Promo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"th"),e.\u0275\u0275text(16,"Trajet"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"th"),e.\u0275\u0275text(18,"Chauffeur"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"th"),e.\u0275\u0275text(20,"Action"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(21,"tbody"),e.\u0275\u0275template(22,f,17,6,"tr",5),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(22),e.\u0275\u0275property("ngForOf",o.commandes))},dependencies:[l.sg,l.O5]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[u.Bz.forChild(p),u.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[l.ez,h]}),t})()}}]);