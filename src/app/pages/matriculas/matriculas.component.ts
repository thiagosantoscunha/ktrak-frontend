import { Component, OnInit, ViewChild } from '@angular/core';
import { MatriculasService } from 'src/app/services/matriculas.service';
import { MatriculaModel } from 'src/app/core/models/matricula.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Router } from '@angular/router';
import { TurmaService } from 'src/app/services/turma.service';
import { TurmaModel } from 'src/app/core/models/turma.model';
import { DisciplinaModel } from 'src/app/core/models/disciplina.model';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.scss']
})
export class MatriculasComponent implements OnInit {

  matriculas: MatriculaModel[];
  matricula: MatriculaModel;
  disciplinas: DisciplinaModel[];


  @ViewChild('alert', { static: true })
  alert: AlertDialogComponent;

  private divAnterior: any = null;
  private disciplina: DisciplinaModel;

  constructor(
    private matriculaService: MatriculasService,
    private disciplinaService: DisciplinaService,
    private router: Router
  ) {
    this.matricula = new MatriculaModel();
  }

  ngOnInit() {
    this.findAll();
    this.findAllDisciplinas();
  }

  findAllDisciplinas() {
    this.disciplinaService.findAll().subscribe((disciplinas: DisciplinaModel[]) => {
      this.disciplinas = disciplinas;
    }, error => console.error(error));
  }

  findAll() {
    this.matriculaService.findAll().subscribe((matriculas: MatriculaModel[]) => {
      this.matriculas = matriculas;
      console.log(this.matriculas);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  remove(event: boolean) {
    if (event === true) {
      this.matriculaService.deleteById(this.matricula.id).subscribe((resp: any) => {
        this.findAll();
      }, (error: HttpErrorResponse) => {
        this.alert.build('Error', error.error.message, 'danger');
        this.alert.openDialog();
        console.error(error);
      });
    }
  }

  initRemove(matricula: MatriculaModel) {
    this.matricula = matricula;
    this.alert.build('Atenção', 'Gostaria de remover esta matrícula?', 'warning', true);
    this.alert.openDialog();
  }

  goToEdit(m: MatriculaModel) {
    this.router.navigate(['/matriculas/edita', m.id]);
  }

  filtraPorDisciplina(e: MouseEvent, d: DisciplinaModel) {
    const div: any = e.target;
    if (this.divAnterior != null) {
      this.divAnterior.classList.remove('bg-primary');
      this.divAnterior.classList.remove('text-light');
    }
    this.divAnterior = div;
    if (div.classList.contains('bg-primary')) {
      div.classList.remove('bg-primary');
      div.classList.remove('text-light');
    } else {
      div.classList.add('bg-primary');
      div.classList.add('text-light');
    }
    this.disciplina = d;
    this.findAllByNomeCurso();
  }

  filtraTodos(e: any) {
    const div: any = e.target;
    if (this.divAnterior != null) {
      this.divAnterior.classList.remove('bg-primary');
      this.divAnterior.classList.remove('text-light');
    }
    this.divAnterior = div;
    if (div.classList.contains('bg-primary')) {
      div.classList.remove('bg-primary');
      div.classList.remove('text-light');
    } else {
      div.classList.add('bg-primary');
      div.classList.add('text-light');
    }
    this.findAll();
  }

  findAllByNomeCurso() {
    this.matriculaService.findAllByNomeCurso(this.disciplina.nome).subscribe((matriculas: MatriculaModel[]) => {
      this.matriculas = matriculas;
    }, error => console.error(error));
  }



}
