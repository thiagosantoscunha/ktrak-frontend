import { TurmaService } from './../../../services/turma.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunosService } from 'src/app/services/alunos.service';
import { ActivatedRoute } from '@angular/router';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.scss']
})
export class AlunoDetailComponent implements OnInit {

  aluno: AlunoModel;
  private sub: any;
  id: number;
  turmas: [] = [];

  @ViewChild('alertDialog', { static: true })
  alertDialog: AlertDialogComponent;

  constructor(private alunoService: AlunosService, private route: ActivatedRoute, private turmaService: TurmaService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getById();
    });
  }

  getById() {
    this.alunoService.findById(this.id).subscribe((aluno: AlunoModel) => {
      this.aluno = aluno;
      this.getTurmas();
    }, (error: HttpErrorResponse) => {
        console.log(error);
        console.error(error.error.message);
    });
  }

  getTurmas() {
    this.turmaService.findAllByAluno(this.aluno).subscribe((turmas: []) => {
      this.turmas = turmas;
      console.log(this.turmas);
    }, error => console.error(error));
  }

  update() {
    this.alunoService.update(this.aluno).subscribe((aluno: AlunoModel) => { }, (error: HttpErrorResponse) => {
      this.alertDialog.title = 'Error';
      this.alertDialog.contentBody = error.error.message;
    });
  }

}
