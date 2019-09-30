import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showSidebar = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLogged();
  }

  isLogged(): boolean {
    return this.authService.isLogged();
  }

  viewSidebar(event: boolean) {
    this.showSidebar = event;
  }
}
