import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './../pages/login/login.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaModel } from '../core/models/pessoa.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseHref: string;

  constructor(private http: HttpClient, private router: Router) {
    this.baseHref = environment.base_url;
  }

  login(login: Login): Observable<any> {
    return this.http.post(`${this.baseHref}/login`, login);
  }

  isLogged(): boolean {
    return localStorage.getItem('jwt') !== null;
  }

  handleLogin() {
    this.router.navigate(['/login']);
  }

  getByPessoa(username: string): Observable<PessoaModel> {
    return this.http.get<PessoaModel>(`${environment.base_url}/v1/pessoas?username=${username}`);
  }



}
