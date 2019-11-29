import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from 'src/app/services/turma.service';
import { TurmaModel } from 'src/app/core/models/turma.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { SemestreModel } from 'src/app/core/models/semestre.model';
import { TurmaSemestreModel } from 'src/app/core/models/turma-semestre.model';

@Component({
  selector: 'app-turma-abrir-form',
  templateUrl: './turma-abrir-form.component.html',
  styleUrls: ['./turma-abrir-form.component.scss']
})
export class TurmaAbrirFormComponent implements OnInit {

  idTurma: number;
  turma: TurmaModel;
  semestre: SemestreModel = new SemestreModel();

  @ViewChild('alert', { static: true })
  alert: AlertDialogComponent;

  constructor(private route: ActivatedRoute, private router: Router, private turmaService: TurmaService) { }

  ngOnInit() {
    this.getParam();
  }

  getParam() {
    this.route.params.subscribe((param) => {
      this.idTurma = +param['id'];
      this.findById();
    }, error => console.error(error));
  }

  findById() {
    this.turmaService.findById(this.idTurma).subscribe((turma: TurmaModel) => {
      this.turma = turma;
    }, error => console.error(error));
  }

  openTurma() {
    let turmaSemestre: TurmaSemestreModel = {
      semestre: this.semestre, turma: this.turma
    };
    this.turmaService.openInSemetre(turmaSemestre).subscribe((turma: TurmaModel) => {
      this.alert.build('Sucesso', 'Turma aberta com sucesso', 'success');
      this.alert.openDialog();
      this.router.navigate(['/turmas']);
    }, (error: HttpErrorResponse) => {
      this.alert.build('Error', error.error.message, 'danger');
      this.alert.openDialog();
    });
  }

}
