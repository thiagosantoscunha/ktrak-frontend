import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListWidgetComponent } from './client-list-widget.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClientListWidgetComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ClientListWidgetComponent],
})
export class ClientListWidgetModule { }
