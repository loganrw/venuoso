import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule], // Import here
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form structure
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required], // Adding Validators is optional but recommended for basic form validation
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // Here, you'd handle your form submission, e.g., sending the data to a server
    console.log(this.contactForm.value);
  }
}
