import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefeicaoListComponent } from './refeicao-list.component';
import { RefeicoesRoutingModule } from '../refeicoes-routing.module';
import { RefeicaoFormModule } from '../refeicao-form/refeicao-form.module';

@NgModule({
  declarations: [RefeicaoListComponent],
  imports: [
    CommonModule,
    RefeicaoFormModule,
    RefeicoesRoutingModule
  ],
  exports: [RefeicaoListComponent],
})
export class RefeicaoListModule { }
