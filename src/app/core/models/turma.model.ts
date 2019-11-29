import { ProfessorModel } from './professor.model';
import { DisciplinaModel } from './disciplina.model';
import { DiaHoraAula } from './dia-hora-aula.model';

export class TurmaModel {
  id: number;
  professor: ProfessorModel;
  disciplina: DisciplinaModel;
  diaHoraAulas: DiaHoraAula[];
  isSelected = false;
  isAberta = false;
}
