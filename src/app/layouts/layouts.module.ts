import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { AuthChauffeurLayoutComponent } from './auth-chauffeur-layout/auth-chauffeur-layout.component';
import { LoginChauffComponent } from './auth-chauffeur-layout/login-chauff/login-chauff.component';
import { RegisterChauffComponent } from './auth-chauffeur-layout/register-chauff/register-chauff.component';
import { AuthClientLayoutComponent } from './auth-client-layout/auth-client-layout.component';
import { LoginLayoutComponent } from './auth-client-layout/login-layout/login-layout.component';
import { InscriptionLayoutComponent } from './auth-client-layout/inscription-layout/inscription-layout.component';
import { ForgetpasswordLayoutComponent } from './auth-client-layout/forgetpassword-layout/forgetpassword-layout.component';
import { ChauffeurLayoutComponent } from './chauffeur-layout/chauffeur-layout.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthAdminLayoutComponent,
    AuthChauffeurLayoutComponent,
    LoginChauffComponent,
    RegisterChauffComponent,
    AuthClientLayoutComponent,
    LoginLayoutComponent,
    InscriptionLayoutComponent,
    ForgetpasswordLayoutComponent,
    ChauffeurLayoutComponent,
    ClientLayoutComponent,
    FrontLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutsModule { }
