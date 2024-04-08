import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { ContactFormService } from '../../services/contact-form/contact-form.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule], // Import here
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, @Inject(ContactFormService) private contactFormService: ContactFormService) {
    // Initialize the form structure
    this.contactForm = this.formBuilder.group({
      firstName: [''], // Adding Validators is optional but recommended for basic form validation
      lastName: [''],
      phoneNumber: [''],
      email: [''],
      message: [''],
    });
  }

  onSubmit(): void {
    const firstName = this.contactForm.get('firstName')?.value;
    const lastName = this.contactForm.get('lastName')?.value;
    const phoneNumber = this.contactForm.get('phoneNumber')?.value;
    const email = this.contactForm.get('email')?.value;
    const message = this.contactForm.get('message')?.value;
    this.contactFormService.submitForm(firstName, lastName, phoneNumber, email, message).subscribe((response: any) => {
    }, (error: any) => {
      console.error(error);
    });
  }
}
