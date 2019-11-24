import { AlertDialogModule } from './../../components/alert-dialog/alert-dialog.module';
import { ModalModule } from './../../components/modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessoresComponent } from './professores.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfessoresComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    AlertDialogModule
  ],
  exports: [ProfessoresComponent],
})
export class ProfessoresModule { }
