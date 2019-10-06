import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListWidgetComponent } from './meal-list-widget.component';

@NgModule({
  declarations: [MealListWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [MealListWidgetComponent],
})
export class MealListWidgetModule { }
