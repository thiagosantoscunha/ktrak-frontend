import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosFormComponent } from './alunos-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlunosFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AlunosFormComponent],
})
export class AlunosFormModule { }
