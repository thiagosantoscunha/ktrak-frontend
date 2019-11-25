import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
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

  login(login: Login) {
    this.http.post(`${this.baseHref}/login`, login).subscribe((resp: any) => {
      localStorage.setItem('jwt', resp.token);
      this.router.navigate(['/alunos']);
      if (resp.token != null && resp.token !== undefined) {
      } else {
        alert('Erro no usuário ou senha');
      }
    }, (error: HttpErrorResponse) => {
        console.error(error);
    });
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
