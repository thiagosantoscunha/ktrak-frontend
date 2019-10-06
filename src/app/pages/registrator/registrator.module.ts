import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistratorComponent } from './registrator.component';
import { AutofocusModule } from 'src/app/directives/autofocus/autofocus.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RefeicaoListModule } from '../refeicoes/refeicao-list/refeicao-list.module';
import { ModalModule } from 'src/app/components/modal/modal.module';

@NgModule({
  declarations: [RegistratorComponent],
  imports: [
    CommonModule,
    AutofocusModule,
    ReactiveFormsModule,
    RefeicaoListModule,
    ModalModule
  ],
  exports: [RegistratorComponent],
})
export class RegistratorModule { }
