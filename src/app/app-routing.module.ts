import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { LoginChauffComponent } from './layouts/auth-chauffeur-layout/login-chauff/login-chauff.component';
import { RegisterChauffComponent } from './layouts/auth-chauffeur-layout/register-chauff/register-chauff.component';
import { ChauffeurLayoutComponent } from './layouts/chauffeur-layout/chauffeur-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { LoginLayoutComponent } from './layouts/auth-client-layout/login-layout/login-layout.component';
import { InscriptionLayoutComponent } from './layouts/auth-client-layout/inscription-layout/inscription-layout.component';
import { ResstPasswordComponent } from './views/clients/resst-password/resst-password.component';
import { ForgetPassClientComponent } from './views/clients/forget-pass-client/forget-pass-client.component';



const routes: Routes = [

  {
    path: '', component: FrontLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./views/front/home/home.module').then(m => m.HomeModule) },
      { path: 'blog', loadChildren: () => import('./views/front/blog/blog.module').then(m => m.BlogModule) },
      { path: 'notifi', loadChildren: () => import('./views/front/notifi/notifi.module').then(m => m.NotifiModule) },
      { path: 'contact', loadChildren: () => import('./views/front/contact/contact.module').then(m => m.ContactModule) },
      { path: 'reservation', loadChildren: () => import('./views/front/reservation/reservation.module').then(m => m.ReservationModule) },
    ]
  },


  {
    path: 'admin', component: AdminLayoutComponent, canActivate: [GuardadminGuard], children: [
      { path: 'dashboard', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'mapadmin', loadChildren: () => import('./views/admin/mapadmin/mapadmin.module').then(m => m.MapadminModule) },
      { path: 'allclient', loadChildren: () => import('./views/admin/allclient/allclient.module').then(m => m.AllclientModule) },
      { path: 'allchauffeur', loadChildren: () => import('./views/admin/allchauffeur/allchauffeur.module').then(m => m.AllchauffeurModule) },
      { path: 'paiement', loadChildren: () => import('./views/admin/paiement/paiement.module').then(m => m.PaiementModule) },
      // {path:'notification',loadChildren:()=>import('./views/admin/notification/notification.module').then(m=>m.NotificationModule)},
      { path: 'detailleclient/:id', loadChildren: () => import('./views/admin/detailleclient/detailleclient.module').then(m => m.DetailleclientModule) },
      { path: 'addblog', loadChildren: () => import('./views/admin/addblog/addblog.module').then(m => m.AddblogModule) },
      { path: 'codepromo', loadChildren: () => import('./views/admin/codepromo/codepromo.module').then(m => m.CodepromoModule) },
      { path: 'allcodepromo', loadChildren: () => import('./views/admin/allcodepromo/allcodepromo.module').then(m => m.AllcodepromoModule) },
      { path: 'typevehicle', loadChildren: () => import('./views/admin/typevehicle/typevehicle.module').then(m => m.TypevehicleModule) },
      { path: 'profile', loadChildren: () => import('./views/admin/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'edit/:id', loadChildren: () => import('./views/admin/update-profile-admin/update-profile-admin.module').then(m => m.UpdateProfileAdminModule) },
      { path: 'noteStar', loadChildren: () => import('./views/admin/note-star/note-star.module').then(m => m.NoteStarModule) },
      { path: 'requetClient', loadChildren: () => import('./views/admin/listerequete-client/listerequete-client.module').then(m => m.ListerequeteClientModule) },
      { path: 'requetChauffeur', loadChildren: () => import('./views/admin/listerequete-chauffeur/listerequete-chauffeur.module').then(m => m.ListerequeteChauffeurModule) },
      { path: 'contact', loadChildren: () => import('./views/admin/liste-contact/liste-contact.module').then(m => m.ListeContactModule) },
      { path: 'addblog', loadChildren: () => import('./views/admin/addblog/addblog.module').then(m => m.AddblogModule) },
      { path: 'listblog', loadChildren: () => import('./views/admin/list-post/list-post.module').then(m => m.ListPostModule) },
      { path: 'update/:id', loadChildren: () => import('./views/admin/list-post/update-post/update-post.module').then(m => m.UpdatePostModule) },
      { path: 'settings', loadChildren: () => import('./views/admin/settings/settings.module').then(m => m.SettingsModule) },
      { path: 'detaille_chauf/:id', loadChildren: () => import('./views/admin/detailles-chauffeur/detailles-chauffeur.module').then(m => m.DetaillesChauffeurModule) },
    ]
  },

  {
    path: 'client', component: ClientLayoutComponent,
    children: [
      { path: 'commande', loadChildren: () => import('./views/clients/commande/commande.module').then(m => m.CommandeModule) },
      { path: 'profileclient', loadChildren: () => import('./views/clients/profile-client/profile-client.module').then(m => m.ProfileClientModule) },
      { path: 'ModifierProfile', loadChildren: () => import('./views/clients/updte-profile-client/updte-profile-client.module').then(m => m.UpdteProfileClientModule) },
      { path: 'historiqueclient', loadChildren: () => import('./views/clients/history-client/history-client.module').then(m => m.HistoryClientModule) },
      { path: 'payementclient', loadChildren: () => import('./views/clients/add-paiement/add-paiement.module').then(m => m.AddPaiementModule) },


    ]
  },

  {
    path: 'chauffeur', component: ChauffeurLayoutComponent,
    children: [
      { path: 'map', loadChildren: () => import('./views/chauffeurs/map/map.module').then(m => m.MapModule) },
      { path: 'profile_chauffeur', loadChildren: () => import('./views/chauffeurs/profile-chauffeurs/profile-chauffeurs.module').then(m => m.ProfileChauffeursModule) },
      { path: 'modifierProfileChauf', loadChildren: () => import('./views/chauffeurs/update-profile-chauffeur/update-profile-chauffeur.module').then(m => m.UpdateProfileChauffeurModule) },

    ]
  },



  /* Auth chauffeur*/
  { path: 'admin/login', component: AuthAdminLayoutComponent },
  /* Auth client*/
  { path: 'client/login', component: LoginLayoutComponent },
  { path: 'client/inscription', component: InscriptionLayoutComponent },
  { path: 'client/response-password-reset', component: ResstPasswordComponent },
  { path: 'client/forget-MotPass', component: ForgetPassClientComponent},
  /* Auth chauffeur*/
  { path: 'chauffeur/login', component: LoginChauffComponent },
  { path: 'chauffeur/register', component: RegisterChauffComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
