import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { RefeicaoListComponent } from './refeicao-list/refeicao-list.component';
import { RefeicaoFormComponent } from './refeicao-form/refeicao-form.component';

const routes: Routes = [
  { path: '', component: RefeicaoListComponent },
  { path: 'new', component: RefeicaoFormComponent },
  { path: 'edit/:id', component: RefeicaoFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RefeicoesRoutingModule { }
