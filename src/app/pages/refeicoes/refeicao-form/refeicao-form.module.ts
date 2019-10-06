import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefeicaoFormComponent } from './refeicao-form.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';

@NgModule({
  declarations: [RefeicaoFormComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule
  ],
  exports: [RefeicaoFormComponent],
})
export class RefeicaoFormModule { }
