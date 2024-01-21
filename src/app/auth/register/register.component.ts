import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { displayErrorForm } from '../../utils/displayErrorForm';
import { isDirty } from '../../guards/interfaces/alert-interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements isDirty {
  private _emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  private _passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  registerForm: FormGroup;
  displayError = displayErrorForm;
  constructor(private _formBuilder: FormBuilder) {
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(9)],
      ],
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
      (this.registerForm.dirty && !this.registerForm.valid) ||
      this.registerForm.valid
    );
  }
}
