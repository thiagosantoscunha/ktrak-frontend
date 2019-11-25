import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculasComponent } from './matriculas.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';
import { AlertDialogModule } from 'src/app/components/alert-dialog/alert-dialog.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatriculasFormComponent } from './matriculas-form/matriculas-form.component';

@NgModule({
  declarations: [MatriculasComponent, MatriculasFormComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule,
    AlertDialogModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [MatriculasComponent, MatriculasFormComponent],
})
export class MatriculasModule { }
