import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-sign-up',
  template: '<!-- component disabled -->',
  // templateUrl: './landing-sign-up.component.html'
})
export class LandingSignUpComponent {

  public signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      name: [
        '',
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(24)
      ],
      email: [
        Validators.required,
        Validators.email
      ],
      password: [
        Validators.required,
        Validators.minLength(10)
      ]
    });
  }

}
