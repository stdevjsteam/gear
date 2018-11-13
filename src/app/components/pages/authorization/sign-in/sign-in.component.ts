import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailPattern, signInValidationMessages} from '../validation-helper-model';
import {AuthorizationService} from '../../../../services/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
  validationMessages;
  loginForm: FormGroup;
  rememberMe = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthorizationService, private router: Router) {
    this.validationMessages = signInValidationMessages;
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', {
        validators: Validators.compose([Validators.required, Validators.pattern(emailPattern)])
      }],
      password: ['', {
        validators: Validators.compose([Validators.required, Validators.minLength(6)])
      }]
    }, {
      validator: [],
      updateOn: 'submit'
    });
  }

  signIn(signInFormData: any) {
    const controls = this.loginForm.controls;
    if (this.loginForm.valid) {
      this.authService.login(signInFormData).subscribe(res => {
        this.authService.saveTokenAndNavigateToHomePage(this.rememberMe, res.token);
      }, error => {});
    } else {
      Object.keys(controls)
        .forEach(controlName => {
          controls[controlName].markAsTouched();
          controls[controlName].markAsDirty();
        });
      return;
    }
  }

  toggleRememberMe() {
    this.rememberMe = ! this.rememberMe;
  }

}
