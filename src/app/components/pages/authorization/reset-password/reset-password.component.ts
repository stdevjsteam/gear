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
      current_password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      new_password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
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

}
