import { Component, TemplateRef, inject } from '@angular/core';
import { displayErrorForm } from '../../utils/displayErrorForm';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isDirty } from '../../guards/interfaces/alert-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements isDirty {
  private _emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  private _passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  loginForm: FormGroup;
  displayError = displayErrorForm;
  constructor(private _formBuilder: FormBuilder) {
    this.loginForm = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this._emailRegex),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(this._passwordRegex)],
      ],
    });
  }

  handleSubmit(): void {
    console.log('coucou');
  }
  isDirty(): boolean {
    return (
      (this.loginForm.dirty && !this.loginForm.valid) || this.loginForm.valid
    );
  }
}
