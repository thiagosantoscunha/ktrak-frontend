import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculasComponent } from './matriculas.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';

@NgModule({
  declarations: [MatriculasComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule
  ],
  exports: [MatriculasComponent],
})
export class MatriculasModule { }
