import { AlunoDetailModule } from './alunos/aluno-detail/aluno-detail.module';
import { MatriculasModule } from './matriculas/matriculas.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule } from './professores/professores.module';
import { LoginModule } from './login/login.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { TurmasModule } from './turmas/turmas.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    AlunosModule,
    ProfessoresModule,
    MatriculasModule,
    LoginModule,
    AlunoDetailModule,
    DisciplinasModule,
    TurmasModule
  ]
})
export class PagesModule { }
