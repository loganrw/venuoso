import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetStartedFormService {
  constructor(private http: HttpClient) { }

  getStartedSubmitForm(name: string, email: string, password: string) {
    const URL = 'https://zjhn34pnog.execute-api.us-east-1.amazonaws.com/Stage-1/get-started-form'
    return this.http.post(URL, {
      name: name,
      email: email,
      password: password,
    });
  }
}
