import { HeaderContentPageModule } from './../../../shared/header-content-page/header-content-page.module';
import { HeaderContentPageComponent } from './../../../shared/header-content-page/header-content-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoDetailComponent } from './aluno-detail.component';

@NgModule({
  declarations: [AlunoDetailComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule
  ],
  exports: [AlunoDetailComponent],
})
export class AlunoDetailModule { }
