import { Router } from '@angular/router';
import { AuthService } from './../../security/auth.service';
import { Login } from './login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  login() {
    const login: Login = {
      username: this.loginGroup.value.username,
      password: this.loginGroup.value.password
    };
    this.authService.login(login);
  }

  isValidForm(): boolean {
    return this.loginGroup.valid;
  }

}
