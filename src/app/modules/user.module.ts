import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TokenInterceptorService} from '../services/token-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

const routes: Routes = [
  // { path: '', component: User }
];
const routerModule = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService, multi: true
    }
  ]
})
export class UserModule { }
