import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { MealModel } from 'src/app/core/models/meal.model';
import { MealType } from 'src/app/core/models/meal-type.model';
import { Avatar } from 'src/app/core/models/avatar.model';

@Component({
  selector: 'app-meal-list-widget',
  templateUrl: './meal-list-widget.component.html',
  styleUrls: ['./meal-list-widget.component.scss']
})
export class MealListWidgetComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('data')
  public data: MealModel[];

  @Input()
  public darkMode = false;

  @Input()
  public showSearchForm = false;

  @Input()
  public hasLimit = true;



  constructor() { }

  ngOnInit() {
  }

  edit(d: MealModel) {
    console.log(d);
  }

  sizeData(): number {
    return this.data ? this.data.length : 0;
  }

  search(event) {
  }



}
