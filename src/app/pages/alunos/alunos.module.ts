import { HeaderContentPageModule } from './../../shared/header-content-page/header-content-page.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';

@NgModule({
  declarations: [AlunosComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule
  ],
  exports: [AlunosComponent],
})
export class AlunosModule { }
