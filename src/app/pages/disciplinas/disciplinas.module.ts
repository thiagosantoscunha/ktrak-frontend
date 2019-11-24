import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinasComponent } from './disciplinas.component';
import { AlertDialogModule } from 'src/app/components/alert-dialog/alert-dialog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DisciplinasComponent],
  imports: [
    CommonModule,
    AlertDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    HeaderContentPageModule
  ],
  exports: [DisciplinasComponent],
})
export class DisciplinasModule { }
