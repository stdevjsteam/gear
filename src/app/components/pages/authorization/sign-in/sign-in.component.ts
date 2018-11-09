import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailPattern, signInValidationMessages} from '../validation-helper-model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
  validationMessages;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
      console.log(signInFormData);
    } else {
      Object.keys(controls)
        .forEach(controlName => {
          controls[controlName].markAsTouched();
        });
      return;
    }
  }

}
