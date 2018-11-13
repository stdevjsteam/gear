import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailPattern, signUpValidationMessages} from '../validation-helper-model';
import {AuthorizationService} from '../../../../services/authorization.service';

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

  constructor(private formBuilder: FormBuilder, private authService: AuthorizationService) {
    this.validationMessages = signUpValidationMessages;
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', {
        validators: Validators.compose([Validators.required, Validators.pattern(emailPattern)])
      }],
      password: ['', {
        validators: Validators.compose([Validators.required, Validators.minLength(6)])
      }],
      repeat_password: ['', {
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
      this.isFormValid = true;
      this.authService.register(signUpFormData).subscribe(res => {
      }, error => {
      });
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
    return g.get('password').value === g.get('repeat_password').value
      ? null : g.get('repeat_password').setErrors({areEqual: true});
  }

}
