import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LogInService {

    constructor(private http: HttpClient) { }

    logIn() {
        // call lambda to authenticate the user
        const url = "https://0c9qmvbsvc.execute-api.us-east-1.amazonaws.com/test-stage/test-lambda";
        this.http.get(url, {}).subscribe((res) => {
            console.log(res);
        });
    }
}