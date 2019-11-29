import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TurmaModel } from 'src/app/core/models/turma.model';
import { TurmaService } from 'src/app/services/turma.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.scss']
})
export class TurmasComponent implements OnInit {

  turmas: TurmaModel[];
  turma: TurmaModel;

  @ViewChild('alert', { static: true })
  alert: AlertDialogComponent;

  constructor(private turmaService: TurmaService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.turmaService.findAll().subscribe((turmas: TurmaModel[]) => {
      this.turmas = turmas;
    }, (error: HttpErrorResponse) => {
        console.error(error);
    });
  }

  novo() {
    this.router.navigate(['/turmas/novo']);
  }

  initRemove(turma: TurmaModel) {
    this.turma = turma;
    this.alert.build('Atenção!', 'Gostaria de remover esta turma?', 'success', true);
    this.alert.openDialog();
  }

  podeRemover(event: boolean) {
    if (event === true) {
      this.turmaService.remove(this.turma.id).subscribe((resp) => {
        this.findAll();
      }, httpError => {
        this.alert.build('Error', 'Não é possível remover esta turma, pois ela pode estar vinculada a algum aluno', 'danger');
        this.alert.openDialog();
        console.error(httpError);
      });
    }
  }

  initEdit(turma: TurmaModel) {
    this.router.navigate(['/turmas/edita', turma.id]);
  }

  abrirTurma(t: TurmaModel) {
    this.router.navigate(['/turmas/abrir', t.id]);
  }


}
