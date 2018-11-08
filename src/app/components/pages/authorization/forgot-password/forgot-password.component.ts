import { Component, OnInit } from '@angular/core';
import {emailPattern, forgotPasswordValidationMessages} from '../validation-helper-model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  validationMessages;
  forgotForm: FormGroup;

  constructor() {
    this.validationMessages = forgotPasswordValidationMessages;
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.forgotForm = new FormGroup ({
      email: new FormControl(null, [Validators.compose([Validators.required, Validators.pattern(emailPattern)])])});
  }

  getNewPass(forgotFormData) {
    if (this.forgotForm.valid) {
      console.log(forgotFormData);
    } else {
      this.forgotForm.controls['email'].markAsDirty();
      this.forgotForm.controls['email'].markAsTouched();
      return;
    }
  }

}
