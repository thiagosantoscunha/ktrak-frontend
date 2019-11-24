import { FormsModule } from '@angular/forms';
import { HeaderContentPageModule } from './../../../shared/header-content-page/header-content-page.module';
import { HeaderContentPageComponent } from './../../../shared/header-content-page/header-content-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoDetailComponent } from './aluno-detail.component';
import { AlertDialogModule } from 'src/app/components/alert-dialog/alert-dialog.module';

@NgModule({
  declarations: [AlunoDetailComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule,
    FormsModule,
    AlertDialogModule
  ],
  exports: [AlunoDetailComponent],
})
export class AlunoDetailModule { }
