import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inject } from '@angular/core';
import { ContactFormService } from '../../../services/contact-form/contact-form.service';

@Component({
  selector: 'app-contact-us',
  template: '<!-- component disabled -->',
  // templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submissionSuccess = false;


  constructor(private formBuilder: FormBuilder, @Inject(ContactFormService) private contactFormService: ContactFormService) {

    this.contactForm = this.formBuilder.group({
      firstName: [''], // Add validators
      lastName: [''],
      phoneNumber: [''],
      email: [''],
      message: [''],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {

      const firstName = this.contactForm.get('firstName')?.value;
      const lastName = this.contactForm.get('lastName')?.value;
      const phoneNumber = this.contactForm.get('phoneNumber')?.value;
      const email = this.contactForm.get('email')?.value;
      const message = this.contactForm.get('message')?.value;

      this.contactFormService.submitForm(firstName, lastName, phoneNumber, email, message).subscribe({
        next: (response) => {
          this.submissionSuccess = true;
          this.contactForm.reset();
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}