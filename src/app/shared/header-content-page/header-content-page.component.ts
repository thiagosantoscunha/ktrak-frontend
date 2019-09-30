import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header-content-page',
  templateUrl: './header-content-page.component.html',
  styleUrls: ['./header-content-page.component.scss']
})
export class HeaderContentPageComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  subtitle: string;

  constructor(private titlePage: Title) {}

  ngOnInit() {
    if (this.title !== null && this.title !== undefined) {
      this.titlePage.setTitle('Aimbra - ' + this.title);
    }
  }

}
