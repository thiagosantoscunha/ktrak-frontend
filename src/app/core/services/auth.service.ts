import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLogged(): boolean {
    return this.getUser() !== null && this.getUser() !== undefined;
  }

  public login() {
    window.localStorage.setItem('user', 'thiago');
  }

  public logout() {
    window.localStorage.removeItem('user');
  }

  public getUser() {
    return window.localStorage.getItem('user');
  }
}
