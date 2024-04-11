import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { GetStartedFormService } from '../../services/get-started-form/get-started-form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './landing-sign-up.component.html'
})
export class LandingSignUpComponent {
  getStartedForm: FormGroup;
  submissionSuccess = false;
  
  constructor(private formBuilder: FormBuilder, @Inject(GetStartedFormService) private contactFormService: GetStartedFormService) {

    this.getStartedForm = this.formBuilder.group({
      name: [''], 
      email: [''],
      password: [''],
    });
  }

  onGetStartedSubmit(): void {
    if(this.getStartedForm.valid){

    const name = this.getStartedForm.get('name')?.value;
    const email = this.getStartedForm.get('email')?.value;
    const password = this.getStartedForm.get('password')?.value;

    this.contactFormService.getStartedSubmitForm(name, email, password).subscribe({
      next: (response) => {
        this.submissionSuccess = true;
        this.getStartedForm.reset();
      },
    error: (error) => {
      console.error(error);
    }
    });
  }
}
}