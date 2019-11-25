import { HttpErrorResponse } from '@angular/common/http';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { DisciplinaModel } from './../../../core/models/disciplina.model';
import { ProfessorModel } from './../../../core/models/professor.model';
import { DisciplinaService } from './../../../services/disciplina.service';
import { Component, OnInit, ViewChild, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TurmaModel } from 'src/app/core/models/turma.model';
import { TurmaService } from 'src/app/services/turma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professore.service';
import { DiaHoraAula } from 'src/app/core/models/dia-hora-aula.model';
import { DiaHoraAulaValidator } from 'src/app/core/validators/dia-hora-aula.validator';

import * as _ from 'lodash';
import { Utils } from 'src/utils/utils';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.scss']
})
export class TurmaFormComponent implements OnInit, AfterContentChecked {

  turmaId: number;
  turma: TurmaModel = new TurmaModel();
  professores: ProfessorModel[];
  disciplinas: DisciplinaModel[];
  diaHoraAula: DiaHoraAula;

  @ViewChild('alert', { static: true })
  alert: AlertDialogComponent;

  @ViewChild('widget', { static: true })
  widget: HTMLDivElement;

  constructor(
    private route: ActivatedRoute,
    private turmaService: TurmaService,
    private professorService: ProfessorService,
    private router: Router,
    private disciplinaService: DisciplinaService) {
      this.turma = new TurmaModel();
      this.turma.diaHoraAulas = [];
      this.diaHoraAula = new DiaHoraAula();
      this.turma.professor = new ProfessorModel();
      this.turma.disciplina = new DisciplinaModel();
  }

  ngOnInit() {
    this.setUrlParam();
    this.findAllProfessores();
    this.findAllDisciplinas();
  }

  ngAfterContentChecked() {
    this.initProfessor();
    this.initDisciplina();
  }

  setUrlParam() {
    this.route.params.subscribe((params) => {
      this.turmaId = +params['id'];
      if (this.turmaId) {
        this.findById();
      }
    });
  }

  findById() {
    this.turmaService.findById(this.turmaId).subscribe((turma: TurmaModel) => {
      this.turma = turma;
    }, error => {
        console.error(error);
    });
  }

  initProfessor() {
    for (const prof of this.professores) {
      if (prof.id === this.turma.professor.id) {
        this.turma.professor = prof;
        prof.isSelected = true;
      }
    }
  }

  initDisciplina() {
    for (const d of this.disciplinas) {
      if (d.id === this.turma.disciplina.id) {
        this.turma.disciplina = d;
        d.isSelected = true;
      }
    }
  }

  findAllProfessores() {
    this.professorService.findAll().subscribe((professores: ProfessorModel[]) => {
      this.professores = professores;
    }, error => {
      console.error(error);
    });
  }

  findAllDisciplinas() {
    this.disciplinaService.findAll().subscribe((d: DisciplinaModel[]) => {
      this.disciplinas = d;
    }, error => {
      console.error(error);
    });
  }

  addDiaHoraAula() {

    if (this.turma.diaHoraAulas.length >= 2) {
      this.alert.build('Error', 'Desculpe... Só pode ter até 2 horários para esta turma', 'danger');
      this.alert.openDialog();
      return;
    }

    if (DiaHoraAulaValidator.naoPodeAdicionar(this.diaHoraAula)) {
      this.alert.build('Error', 'Desculpe... ou o dia ou a hora estão vazios', 'danger');
      this.alert.openDialog();
      return;
    }

    if (this.turma.diaHoraAulas.length > 0) {
      for (const item of this.turma.diaHoraAulas) {
        if (this.jaTemHorarioCadastradoNesteDia(item.dia, item.hora)) {
          this.alert.build('Error', 'Este horário já esta selecionado para este dia', 'danger');
          this.alert.openDialog();
          return;
        }
      }
    }

    this.turma.diaHoraAulas.push(this.diaHoraAula);
    this.diaHoraAula = new DiaHoraAula();
  }

  jaTemHorarioCadastradoNesteDia(dia: string, hora: string): boolean {
    return dia === this.diaHoraAula.dia && hora === this.diaHoraAula.hora;
  }

  save() {
    if (this.turma.id) {
      this.update();
    } else {
      this.create();
    }
  }

  update() {
    console.log('update', this.turma);
    console.log('create', this.turma);
    this.turmaService.update(this.turma).subscribe((turma: TurmaModel) => {
      this.alert.build('Sucesso', 'Sucesso ao atualizar esta turma', 'sucess');
      this.alert.openDialog();
      this.router.navigate(['/turmas']);
    }, (error: HttpErrorResponse) => {
        this.alert.build('Error', error.error.message, 'danger');
        this.alert.openDialog();
        console.error(error);
    });
  }

  create() {
    console.log('create', this.turma);
    this.turmaService.insert(this.turma).subscribe((turma: TurmaModel) => {
      this.alert.build('Sucesso', 'Sucesso ao adicionar esta turma', 'sucess');
      this.alert.openDialog();
      this.router.navigate(['/turmas']);
    }, (error: HttpErrorResponse) => {
        this.alert.build('Error', error.error.message, 'danger');
        this.alert.openDialog();
        console.error(error);
    });
  }

  remove(item: DiaHoraAula) {
    if (this.turma.diaHoraAulas.length > 0) {
      _.remove(this.turma.diaHoraAulas, (n) => n === item);
    }
  }

  setProfessor(p: ProfessorModel) {
    p.isSelected = !p.isSelected;
    this.turma.professor = p;
    for (const prof of this.professores) {
      if (prof.id !== p.id) {
        prof.isSelected = false;
      }
    }
  }
  setDisciplina(p: DisciplinaModel) {
    p.isSelected = !p.isSelected;
    this.turma.disciplina = p;
    for (const disc of this.disciplinas) {
      if (disc.id !== p.id) {
        disc.isSelected = false;
      }
    }
  }

  getFirstLastName(value: string): string {
    return Utils.getFirstLastName(value);
  }

}
