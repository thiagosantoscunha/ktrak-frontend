import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogComponent } from './alert-dialog.component';

@NgModule({
  declarations: [AlertDialogComponent],
  exports: [AlertDialogComponent],
  imports: [
    CommonModule
  ]
})
export class AlertDialogModule { }
