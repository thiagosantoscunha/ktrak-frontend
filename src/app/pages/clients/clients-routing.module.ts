import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'new', component: ClientFormComponent },
  { path: 'edit/:id', component: ClientFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
