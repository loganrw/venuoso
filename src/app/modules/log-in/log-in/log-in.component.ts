import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogInService } from '../services/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html'
})
export class LogInComponent implements OnInit {

  mode = 'login';

  toggleMode(targetMode: string) {
    if(this.mode !== targetMode){
      this.mode = targetMode;
    }
  }

  public logInForm: FormGroup;

  constructor(private fb: FormBuilder, private logInService: LogInService) {
    this.logInForm = this.fb.group({
      username: [
        '',
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(24)
      ],
      password: [
        Validators.required,
        Validators.minLength(10)
      ],
      rememberMe: []
    });
  }

  ngOnInit(): void {
    this.logInService.logIn();
  }

}