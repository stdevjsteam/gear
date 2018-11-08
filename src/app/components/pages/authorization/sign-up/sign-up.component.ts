import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailPattern, signUpValidationMessages} from '../validation-helper-model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  isFormValid = false;
  validationMessages;
  isSignUpSuccess = false;
  isRegFailed = false;

  constructor(private formBuilder: FormBuilder) {
    this.validationMessages = signUpValidationMessages;
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.signUpForm = this.formBuilder.group({
      // user_name: ['', {
      //   validators: Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(userNamePattern)])
      // }],
      //  is_active: [{value: true}],
      email: ['', {
        validators: Validators.compose([Validators.required, Validators.pattern(emailPattern)])
      }],
      password: ['', {
        validators: Validators.compose([Validators.required, Validators.minLength(6)])
      }],
      passwordConfirm: ['', {
        validators: Validators.compose([Validators.required, Validators.minLength(6)])
      }]
    }, {
      validator: [SignUpComponent.passwordMatchValidator],
      updateOn: 'submit'
    });
  }

  signUp(signUpFormData: any): void {
    const controls = this.signUpForm.controls;
    if (this.signUpForm.valid) {
      console.log(signUpFormData);
      this.isFormValid = true;
    } else {
      Object.keys(controls)
        .forEach(controlName => {
          controls[controlName].markAsTouched();
          controls[controlName].markAsDirty();
        });
      return;
    }
  }

  private static passwordMatchValidator(g: FormGroup): null | void {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null : g.get('passwordConfirm').setErrors({areEqual: true});
  }

}
