import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient) { }

  callLambda(formData: any): Observable<any> {
    return this.http.post('https://zjhn34pnog.execute-api.us-east-1.amazonaws.com/Stage-1', formData);
  }
}
