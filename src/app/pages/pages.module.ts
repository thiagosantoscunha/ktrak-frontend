import { MatriculasModule } from './matriculas/matriculas.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule } from './professores/professores.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    AlunosModule,
    ProfessoresModule,
    MatriculasModule,
  ]
})
export class PagesModule { }
