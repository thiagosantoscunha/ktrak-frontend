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
    this.authService.login(login).subscribe(resp => {
      if (resp.token != null && resp.token !== undefined) {
        localStorage.setItem('jwt', resp.token);
        this.router.navigate(['/alunos']);
      } else {
        alert('Erro no usuário ou senha');
      }
    }, (error: HttpErrorResponse) => {
        console.error(error);
    });
  }

  isValidForm(): boolean {
    return this.loginGroup.valid;
  }

}
