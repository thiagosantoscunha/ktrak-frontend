import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { AlertDialogComponent, AlertType } from 'src/app/components/alert-dialog/alert-dialog.component';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { AlunosService } from 'src/app/services/alunos.service';

export enum DialogColor { DANGER, PRIMARY, SUCCESS, WARNING, INFO }

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  isSave = false;
  alunos: AlunoModel[];
  aluno: AlunoModel;

  @ViewChild('modalForm', { static: true })
  modalForm: ModalComponent;

  @ViewChild('alertDialog', { static: true })
  alertDialog: AlertDialogComponent;

  constructor(private alunoService: AlunosService, private router: Router) {
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.alunoService.findAll().subscribe((alunos: AlunoModel[]) => {
      if (alunos) {
        this.alunos = alunos;
      }
    });
  }

  newAluno(): void {
    this.aluno = new AlunoModel();
    this.displayDialog();
  }

  closeDialog(): void {
    this.modalForm.close();
  }

  displayDialog(): void {
    // this.show = !this.show;
    if (this.aluno.id) {
      this.modalForm.title = 'Atualizar o usuário';
      this.modalForm.open();
    } else {
      this.modalForm.title = 'Criar novo usuário';
      this.modalForm.open();
    }
  }

  save() {
    this.isSave = true;
    this.modalForm.close();
    this.findAll();
  }

  confirmRemove(aluno: AlunoModel) {
    this.aluno = aluno;
    this.openDialog('Atenção', 'Você deseja realmente remover este aluno?', 'info', true);
    this.alertDialog.openDialog();
  }

  remove(event: boolean): void {
    if (event !== undefined && event === true) {
      this.alunoService.deleteById(this.aluno.id).subscribe(resp => {
        if (resp) {
          this.openDialog('Sucesso', 'Aluno Removido com sucesso', 'success');
        }
      }, (httpError: HttpErrorResponse) => {
        this.openDialog('Erro', httpError.error.message, 'danger');
        console.error(httpError);
      });
    }
  }

  openDialog(title: string, body: string, type: string, mode: boolean = false) {
    this.alertDialog.confirmationMode = mode;
    this.alertDialog.title = title;
    this.alertDialog.contentBody = body;
    this.alertDialog.type = type;
    this.alertDialog.openDialog();
  }

  edit(aluno: AlunoModel) {
    this.aluno = aluno;
    this.displayDialog();
  }



  showDetails(aluno: AlunoModel) {
    this.router.navigate(['/alunos/detalhes/', aluno.id ]);
  }

}
