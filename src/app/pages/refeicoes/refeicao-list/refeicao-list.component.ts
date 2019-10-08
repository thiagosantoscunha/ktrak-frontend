import { Component, OnInit, Input } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { MealModel } from 'src/app/core/models/meal.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-refeicao-list',
  templateUrl: './refeicao-list.component.html',
  styleUrls: ['./refeicao-list.component.scss']
})
export class RefeicaoListComponent implements OnInit {

  @Input()
  public meals: MealModel[];

  @Input()
  public showHeaderPage = true;

  @Input()
  public darkMode = false;

  @Input()
  public showSearchForm = true;

  constructor(private service: MealService) {}

  ngOnInit() {
    this.getByData();
  }

  getByData(): void {
    this.service.getByData(new Date()).subscribe((meals: MealModel[]) => {
      if (meals) {
        this.meals = meals;
        console.log(this.meals);
      }
    }, (error: HttpErrorResponse) => {
        alert(error.error.message);
    });
  }

}
