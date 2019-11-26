import { Component, OnInit, ViewChild, AfterContentChecked, AfterViewInit } from '@angular/core';
import { MatriculasService } from 'src/app/services/matriculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatriculaModel } from 'src/app/core/models/matricula.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { TurmaService } from 'src/app/services/turma.service';
import { TurmaModel } from 'src/app/core/models/turma.model';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { AlunosService } from 'src/app/services/alunos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utils } from 'src/utils/utils';

@Component({
  selector: 'app-matriculas-form',
  templateUrl: './matriculas-form.component.html',
  styleUrls: ['./matriculas-form.component.scss']
})
export class MatriculasFormComponent implements OnInit, AfterContentChecked, AfterViewInit {

  matricula: MatriculaModel;
  turmas: TurmaModel[] = [];
  turma: TurmaModel;
  alunos: AlunoModel[] = [];
  aluno: AlunoModel;
  id: number;

  @ViewChild('alert', { static: true })
  alert: AlertDialogComponent;

  searchForm: FormGroup;
  criteria: string;


  constructor(
    private matriculaService: MatriculasService,
    private turmaService: TurmaService,
    private alunoService: AlunosService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {
    this.matricula = new MatriculaModel();
    this.matricula.turma = new TurmaModel();
    this.matricula.aluno = new AlunoModel();
  }

  ngOnInit() {
    this.setUrlParam();
    this.findAllTurmas();
    this.searchForm = this.fb.group({
      criteria: ['', [Validators.minLength(3), Validators.maxLength(64)]]
    });
  }

  ngAfterContentChecked() {
    this.initTurma();
  }

  ngAfterViewInit() {

  }

  setUrlParam() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      if (this.id) {
        this.findById();
      }
    }, err => console.error('PARAM ERROR', err));
  }

  findById() {
    this.matriculaService.findById(this.id).subscribe((matricula: MatriculaModel) => {
      this.matricula = matricula;
      this.initAluno();
      console.log('Find by id', this.matricula);
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  initTurma() {
    for (const t of this.turmas) {
      console.log('t', t.id);
      console.log('matricula', this.matricula.turma.id);
      if (t.id === this.matricula.turma.id) {
        t.isSelected = true;
      }
    }
  }

  initAluno() {
    this.criteria = this.matricula.aluno.nome;
    this.findAllAlunoPorNome();
  }

  search() {
    this.criteria = this.searchForm.value.criteria;
    this.findAllAlunoPorNome();
  }

  findAllAlunoPorNome() {
    if (this.criteria.length >= 3) {
      this.alunoService.findAllByAluno(this.criteria).subscribe((alunos: AlunoModel[]) => {
        this.alunos = alunos;
        if (this.alunos.length === 1) {
          this.alunos[0].isSelected = true;
          this.matricula.aluno = this.alunos[0];
        }
      }, (error: HttpErrorResponse) => {
          this.alert.build('Error', error.error, 'danger');
      });
    }
  }



  create() {
    this.matriculaService.insert(this.matricula).subscribe((matricula: MatriculaModel) => {
      this.matricula = matricula;
      this.router.navigate(['/matriculas']);
    }, (error: HttpErrorResponse) => {
      this.alert.build('Error', error.error.message, 'danger');
      this.alert.openDialog();
      console.error(error);
    });
  }

  update() {
    this.matriculaService.update(this.matricula).subscribe((matricula: MatriculaModel) => {
      this.matricula = matricula;
      this.router.navigate(['/matriculas']);
    }, (error: HttpErrorResponse) => {
      this.alert.build('Error', error.error.message, 'danger');
      this.alert.openDialog();
      console.error(error);
    });
  }

  findAllTurmas() {
    this.turmaService.findAll().subscribe((turmas: TurmaModel[]) => {
      this.turmas = turmas;
    }, (error: HttpErrorResponse) => {
      console.error(error);
    });
  }

  setTurma(t: TurmaModel) {
    this.turma = t;
    t.isSelected = !t.isSelected;
    this.matricula.turma = t;
    console.log('Turma selecionada ', this.matricula.turma);
    for (const tu of this.turmas) {
      if (tu.id !== t.id) {
        tu.isSelected = false;
      }
    }
  }

  setAluno(a: AlunoModel) {
    this.aluno = a;
    a.isSelected = !a.isSelected;
    this.matricula.aluno = a;
    console.log('Aluno   selecionada ', this.matricula.aluno);
    for (const tu of this.alunos) {
      if (tu.id !== a.id) {
        tu.isSelected = false;
      }
    }
  }

  save() {
    if (this.matricula.id === undefined) {
      this.create();
    } else {
      this.update();
    }
  }

  getFirstLastname(value: string): string {
    return Utils.getFirstLastName(value);
  }


}
