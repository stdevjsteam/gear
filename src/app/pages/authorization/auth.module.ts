import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AuthorizationService} from '../../services/authorization.service';
import { AuthorizationComponent } from './authorization.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path: '', component: AuthorizationComponent, children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent }
    ]}
];
const routerModule = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthorizationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    routerModule
  ],
  providers: [
    AuthorizationService
  ],
  bootstrap: [AuthorizationComponent]
})
export class AuthModule { }
