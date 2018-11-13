import { Injectable } from '@angular/core';
import {BaseHttpService} from './base-http-service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService extends BaseHttpService {
  private static LOGIN_URL = '/auth-users/login/';
  private static REGISTER_URL = '/auth-users/register/';
  private static RESEND_EMAIL_URL = '/auth-users/resend-email/';
  private static RESET_PASSWORD_URL = '/auth-users/reset-password/';
  private static CHANGE_PASSWORD_URL = '/auth-users/change-password/';
  private static FORGOT_PASSWORD_URL = '/auth-users/forgot-password/';
  private static CONFIRM_ACCOUNT_URL = '/auth-users/confirm-account/';
  private authToken: string;

  constructor(private httpClient: HttpClient, private router: Router, private cookieService: CookieService) {
    super(httpClient);
  }

  get token() {return this.authToken; }
  set token(token) {this.authToken = token; }

  login(credentials: object) {
    return this.post(AuthorizationService.LOGIN_URL, credentials);
  }

  register(credentials: object) {
    return this.post(AuthorizationService.REGISTER_URL, credentials);
  }

  confirmAccount(credentials: object) {
    return this.post(AuthorizationService.CONFIRM_ACCOUNT_URL, credentials);
  }

  resendEmail(credentials: object) {
    return this.post(AuthorizationService.RESEND_EMAIL_URL, credentials);
  }

  changePassword(credentials: object) {
    return this.post(AuthorizationService.CHANGE_PASSWORD_URL, credentials);
  }

  resetPassword(credentials: object, resetKey: string) {
    return this.post(`${AuthorizationService.RESET_PASSWORD_URL}${resetKey}`, credentials);
  }

  forgotPassword(credentials: object) {
    return this.post(AuthorizationService.FORGOT_PASSWORD_URL, credentials);
  }

  saveTokenAndNavigateToHomePage(rememberMe: boolean, token: string) {
    if (rememberMe) {
      this.cookieService.set('token', token);
    } else {
      this.token = token;
    }
    this.router.navigate(['/home']);
  }

  isLoggedIn(): boolean {
    return !(!this.token) || this.cookieService.check('token');
  }

}
