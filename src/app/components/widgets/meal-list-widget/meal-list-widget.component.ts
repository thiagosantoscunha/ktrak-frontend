import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-meal-list-widget',
  templateUrl: './meal-list-widget.component.html',
  styleUrls: ['./meal-list-widget.component.scss']
})
export class MealListWidgetComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('data')
  public data: any[];

  @Input()
  public darkMode = false;

  @Input()
  public showSearchForm = false;

  @Input()
  public hasLimit = true;



  constructor() { }

  ngOnInit() {
  }

  edit(d: any) {
    console.log(d);
  }

  sizeData(): number {
    return this.data ? this.data.length : 0;
  }

  search(event) {
  }



}
