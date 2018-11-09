import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {resetPassValidationMessages} from '../validation-helper-model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
  resetPassForm: FormGroup;
  validationMessages;

  constructor(private builder: FormBuilder) {
    this.validationMessages = resetPassValidationMessages;
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.resetPassForm = this.builder.group({
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      repeat_password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    }, {
      validator: [ResetPasswordComponent.passwordMatchValidator],
      updateOn: 'submit'
    });
  }

  resetPassword(resetPassFormData) {
    const controls = this.resetPassForm.controls;
    if (this.resetPassForm.valid) {
      console.log(resetPassFormData);
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
