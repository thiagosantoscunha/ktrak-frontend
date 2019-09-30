import { Component, OnInit } from '@angular/core';
import { User } from 'src/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = null;

  constructor() { }

  ngOnInit() {
  }

  public searchUser(): void {
    this.user = {
      name: 'Thiago Cunha',
      email: 'grupocodenome@gmail.com',
      password: null,
      username: 'codenome',
      image: 'assets/images/thiago.jpg'
    };
  }

  login() {
  }

  public hasUser(): boolean {
    return this.user !== null;
  }

}
