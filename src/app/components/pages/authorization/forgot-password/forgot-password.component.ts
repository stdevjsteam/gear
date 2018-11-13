import { Component, OnInit } from '@angular/core';
import {emailPattern, forgotPasswordValidationMessages} from '../validation-helper-model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorizationService} from '../../../../services/authorization.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  validationMessages;
  forgotForm: FormGroup;

  constructor(private authService: AuthorizationService) {
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
      this.authService.forgotPassword(forgotFormData).subscribe(response => {}
      , error => {});
    } else {
      this.forgotForm.controls['email'].markAsDirty();
      this.forgotForm.controls['email'].markAsTouched();
      return;
    }
  }

}
