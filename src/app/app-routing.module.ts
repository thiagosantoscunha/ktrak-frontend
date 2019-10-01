import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'clients',
    loadChildren: () => import(`./pages/clients/client-list/client-list.module`).then(m => m.ClientListModule)
  },
  {
    path: 'refeicoes',
    loadChildren: () => import(`./pages/refeicoes/refeicao-list/refeicao-list.module`).then(m => m.RefeicaoListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
