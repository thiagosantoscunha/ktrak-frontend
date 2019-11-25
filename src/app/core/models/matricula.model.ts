import { AlunoModel } from './aluno.model';
import { TurmaModel } from './turma.model';

export class MatriculaModel {
    id: number;
    aluno: AlunoModel;
    turma: TurmaModel;
}