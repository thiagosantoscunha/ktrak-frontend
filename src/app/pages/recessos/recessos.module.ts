import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecessosFormComponent } from './recessos-form/recessos-form.component';
import { RecessosComponent } from './recessos.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';
import { AlertDialogModule } from 'src/app/components/alert-dialog/alert-dialog.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecessosFormComponent, RecessosComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule,
    AlertDialogModule,
    FormsModule
  ]
})
export class RecessosModule { }
