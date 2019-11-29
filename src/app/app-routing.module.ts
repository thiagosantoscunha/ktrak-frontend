import { TurmaFormComponent } from './pages/turmas/turma-form/turma-form.component';
import { TurmasComponent } from './pages/turmas/turmas.component';
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
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { MatriculasFormComponent } from './pages/matriculas/matriculas-form/matriculas-form.component';
import { QrpageComponent } from './pages/qrpage/qrpage.component';
import { TurmaAbrirFormComponent } from './pages/turmas/turma-abrir-form/turma-abrir-form.component';
import { DiasLetivosComponent } from './pages/dias-letivos/dias-letivos.component';
import { RecessosComponent } from './pages/recessos/recessos.component';
import { RecessosFormComponent } from './pages/recessos/recessos-form/recessos-form.component';

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
  },
  {
    path: 'matriculas/novo',
    component: MatriculasFormComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'matriculas/edita/:id',
    component: MatriculasFormComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'disciplinas',
    component: DisciplinasComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'turmas',
    component: TurmasComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'turmas/novo',
    component: TurmaFormComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'turmas/abrir/:id',
    component: TurmaAbrirFormComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'turmas/edita/:id',
    component: TurmaFormComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'qrcode',
    component: QrpageComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'dias-letivos',
    component: DiasLetivosComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'recessos',
    component: RecessosComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'recessos/novo',
    component: RecessosFormComponent,
    canLoad: [LoggedInGuard]
  },
  {
    path: 'recessos/edita/:id',
    component: RecessosFormComponent,
    canLoad: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
