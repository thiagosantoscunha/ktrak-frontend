import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KickReportWidgetComponent } from './kick-report-widget.component';

@NgModule({
  declarations: [KickReportWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [KickReportWidgetComponent],
})
export class KickReportWidgetModule { }
