"use strict";(self.webpackChunkfront_appbee=self.webpackChunkfront_appbee||[]).push([[592],{4221:(h,n,i)=>{i.d(n,{K:()=>a});var r=i(8256),o=i(529);let a=(()=>{class e{constructor(t){this.http=t}getcode(){return this.http.get("http://127.0.0.1:8000/api/code/index")}postcode(t){return this.http.post("http://127.0.0.1:8000/api/code/create",t)}getcodeEdit(t){return this.http.get("http://127.0.0.1:8000/api/code/edit/"+t)}putcode(t,c){return this.http.put("http://127.0.0.1:8000/api/code/update/"+t,c)}deletecode(t){return this.http.delete("http://127.0.0.1:8000/api/code/delete/"+t)}ajouteContact(t){return this.http.post("http://127.0.0.1:8000/api/contact/create",t)}}return e.\u0275fac=function(t){return new(t||e)(r.\u0275\u0275inject(o.eN))},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},3541:(h,n,i)=>{i.d(n,{D:()=>a});var r=i(8256),o=i(529);let a=(()=>{class e{constructor(t){this.http=t}getAllchauffeur(){return this.http.get("http://127.0.0.1:8000/api/chauffeur/index")}getAllclient(){return this.http.get("http://127.0.0.1:8000/api/client/index")}getNotification(){return this.http.get("http://127.0.0.1:8000/api/notification/index")}ajouterNotification(t){return this.http.post("http://127.0.0.1:8000/api/notification/create",t)}supNotification(t){return this.http.delete("http://127.0.0.1:8000/api/notification/delete/"+t)}modifierNotification(t,c){return this.http.put("http://127.0.0.1:8000/api/notification/update/"+t,c)}getEditNotification(t){return this.http.get("http://127.0.0.1:8000/api/notification/getedit/"+t)}}return e.\u0275fac=function(t){return new(t||e)(r.\u0275\u0275inject(o.eN))},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},3349:(h,n,i)=>{i.d(n,{N:()=>a});var r=i(8256),o=i(529);let a=(()=>{class e{constructor(t){this.http=t}getPayer(){return this.http.get("http://127.0.0.1:8000/api/modep/index")}ajouterP(t){return this.http.post("http://127.0.0.1:8000/api/modep/create",t)}ajouterCommande(t){return this.http.post("http://127.0.0.1:8000/api/rqclient/addclient",t)}indexCommande(){return this.http.get("http://127.0.0.1:8000/api/rqclient/index")}suppCommande(t){return this.http.delete("http://127.0.0.1:8000/api/rqclient/delete/"+t)}indexBlog(){return this.http.get("http://127.0.0.1:8000/api/blog/index")}ajouterblog(t){return this.http.post("http://127.0.0.1:8000/api/blog/create",t)}supprimerblog(t){return this.http.delete("http://127.0.0.1:8000/api/blog/delete/"+t)}modifierblog(t,c){return this.http.put("http://127.0.0.1:8000/api/blog/update/"+t,c)}afficherblog(t){return this.http.get("http://127.0.0.1:8000/api/blog/edit/"+t)}}return e.\u0275fac=function(t){return new(t||e)(r.\u0275\u0275inject(o.eN))},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8728:(h,n,i)=>{i.d(n,{E:()=>a});var r=i(8256),o=i(529);let a=(()=>{class e{constructor(t){this.http=t}ajouterVoiture(t){return this.http.post("http://127.0.0.1:8000/api/voiture/create",t)}getListeStar(){return this.http.get("http://127.0.0.1:8000/api/note/index")}getListeContact(){return this.http.get("http://127.0.0.1:8000/api/contact/index")}}return e.\u0275fac=function(t){return new(t||e)(r.\u0275\u0275inject(o.eN))},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);