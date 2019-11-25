import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculasComponent } from './matriculas.component';
import { HeaderContentPageModule } from 'src/app/shared/header-content-page/header-content-page.module';
import { AlertDialogModule } from 'src/app/components/alert-dialog/alert-dialog.module';
import { ModalModule } from 'src/app/components/modal/modal.module';

@NgModule({
  declarations: [MatriculasComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule,
    AlertDialogModule,
    ModalModule
  ],
  exports: [MatriculasComponent],
})
export class MatriculasModule { }
