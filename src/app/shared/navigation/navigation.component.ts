import { Component, OnInit, ViewChild, ViewChildren, AfterContentInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterContentInit {

  @Output()
  public showSidebar: EventEmitter<boolean>;

  public viewSidebar = true;

  constructor(private authService: AuthService) {
    this.showSidebar = new EventEmitter<boolean>();
  }

  ngAfterContentInit() {
    this.isLooged();
  }

  isLooged(): boolean {
    return this.authService.isLogged();
  }

  public toggleSidebar() {
    this.showSidebar.emit(this.viewSidebar);
    this.viewSidebar = !this.viewSidebar;
  }

}
