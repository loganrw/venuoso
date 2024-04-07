import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  constructor(private http: HttpClient) { }

  callLambda(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post('https://3kxqyhatbnmvuwutzkh3pbilo40ndozy.lambda-url.us-east-1.on.aws/', JSON.stringify(formData), { headers: headers});
  }
}
