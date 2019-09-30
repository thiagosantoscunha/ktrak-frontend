import { Component, OnInit } from '@angular/core';
import { BreakfastWidget, LunchWidget, SnackWidget } from 'src/app/core/models/widgets/dashboard-widgets';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  breakfast: BreakfastWidget;
  lunch: LunchWidget;
  snack: SnackWidget;

  constructor() {
    this.breakfast = new BreakfastWidget();
    this.lunch = new LunchWidget();
    this.snack = new SnackWidget();
  }

  ngOnInit() {
  }

}
