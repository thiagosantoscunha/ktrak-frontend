import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessoresComponent } from './professores.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';

@NgModule({
  declarations: [ProfessoresComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule
  ],
  exports: [ProfessoresComponent],
})
export class ProfessoresModule { }
