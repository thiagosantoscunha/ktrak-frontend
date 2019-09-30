import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  public display: string;

  @Input()
  public showSidebar: boolean;

  @ViewChild('dropdown', { static: false, read: ElementRef })
  public linkDropdown: ElementRef;

  constructor(private elRef: ElementRef) {
    this.display = 'none';
  }

  ngOnInit() {
  }

  openDropdown(e: MouseEvent) {
  }

}
