import { HeaderContentPageModule } from './../../shared/header-content-page/header-content-page.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { AlunosFormModule } from './alunos-form/alunos-form.module';
import { AlertDialogModule } from 'src/app/components/alert-dialog/alert-dialog.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlunosComponent],
  imports: [
    CommonModule,
    HeaderContentPageModule,
    ModalModule,
    AlunosFormModule,
    AlertDialogModule,
    FormsModule
  ],
  exports: [AlunosComponent],
})
export class AlunosModule { }
