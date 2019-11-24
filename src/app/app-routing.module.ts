import { AlunoDetailComponent } from './pages/alunos/aluno-detail/aluno-detail.component';
import { AlunosFormComponent } from './pages/alunos/alunos-form/alunos-form.component';
import { LoginComponent } from './pages/login/login.component';
import { MatriculasComponent } from './pages/matriculas/matriculas.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { ProfessoresComponent } from './pages/professores/professores.component';
import { LoggedInGuard } from './security/loggedin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'alunos',
    component: AlunosComponent,
    canLoad: [LoggedInGuard],
    children: [
    ]
  },
  {
    path: 'alunos/detalhes/:id',
    component: AlunoDetailComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'professores',
    component: ProfessoresComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'matriculas',
    component: MatriculasComponent,
    canLoad: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
