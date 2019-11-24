import { Component, OnInit, ViewChild, ViewChildren, AfterContentInit, ElementRef, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';

import * as jwt_decode from 'jwt-decode';
import { PessoaModel } from 'src/app/core/models/pessoa.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterContentInit, OnInit {

  @Output()
  public showSidebar: EventEmitter<boolean>;

  public viewSidebar = true;

  pessoa: PessoaModel;

  constructor(private authService: AuthService) {
    this.showSidebar = new EventEmitter<boolean>();
    this.getByUsername();
  }

  ngAfterContentInit() {
    this.isLooged();
  }

  ngOnInit() {

  }

  getByUsername() {
    const decoding = jwt_decode(localStorage.getItem('jwt'));
    const username = decoding.sub;
    localStorage.setItem('username', username);
    this.authService.getByPessoa(username).subscribe((pessoa: PessoaModel) => {
      this.pessoa = pessoa;
    });
  }

  isLooged(): boolean {
    return this.authService.isLogged();
  }

  public toggleSidebar() {
    this.showSidebar.emit(this.viewSidebar);
    this.viewSidebar = !this.viewSidebar;
  }

}
