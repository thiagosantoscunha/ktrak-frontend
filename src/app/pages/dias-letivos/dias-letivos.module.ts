import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiasLetivosComponent } from './dias-letivos.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';

@NgModule({
  declarations: [DiasLetivosComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule
  ]
})
export class DiasLetivosModule { }
