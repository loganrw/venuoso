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
      message: [''],
    });
  }

  onSubmit(): void {
    const formData = this.contactForm.value;
    this.contactFormService.callLambda(formData).subscribe((response: any) => {
      console.log(response);
      console.log(formData); // Trying to get output of form data in console to debug.
    }, (error: any) => {
      console.error(error);
    });
  }
}
