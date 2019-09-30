import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressWidgetComponent } from './progress-widget.component';

@NgModule({
  declarations: [ProgressWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgressWidgetComponent],
})
export class ProgressWidgetModule { }
