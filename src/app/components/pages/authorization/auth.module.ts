import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AuthorizationService} from '../../../services/authorization.service';
import { AuthorizationComponent } from './authorization.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DirectiveModule} from '../../../../directives/directive.module';
import {MyTranslateRootModule} from '../../../../shared/modules/my-translate-root.module';
import {MyTranslateChildModule} from '../../../../shared/modules/my-translate-child.module';

const routes: Routes = [
  {path: '', component: AuthorizationComponent, children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent }
    ]},
];

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthorizationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    ReactiveFormsModule,
    FormsModule,
    MyTranslateChildModule,
    DirectiveModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthorizationService
  ],
  bootstrap: [AuthorizationComponent]
})
export class AuthModule { }
