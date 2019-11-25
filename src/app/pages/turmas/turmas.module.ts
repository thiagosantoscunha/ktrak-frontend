import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmasComponent } from './turmas.component';
import { HeaderContentPageModule } from './../../shared/header-content-page/header-content-page.module';
import { TurmaFormComponent } from './turma-form/turma-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertDialogModule } from 'src/app/components/alert-dialog/alert-dialog.module';

@NgModule({
  declarations: [TurmasComponent, TurmaFormComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AlertDialogModule
  ],
  exports: [TurmasComponent, TurmaFormComponent],
})
export class TurmasModule { }
