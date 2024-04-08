import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  constructor(private http: HttpClient) { }

  submitForm(firstName: string, lastName: string, phoneNumber: string, email: string, message: string) {
    const URL = 'https://zjhn34pnog.execute-api.us-east-1.amazonaws.com/Stage-1/contact-us-form'
    return this.http.post(URL, {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      message: message
    });
  }
}
