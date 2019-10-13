import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { AlunoService } from 'src/app/core/services/aluno.service';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { AlertDialogComponent, AlertType } from 'src/app/components/alert-dialog/alert-dialog.component';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export enum DialogColor { DANGER, PRIMARY, SUCCESS, WARNING, INFO }

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  public isSave = false;
  public alunos: AlunoModel[];
  public aluno: AlunoModel;

  @ViewChild('modalForm', { static: true })
  public modalForm: ModalComponent;

  @ViewChild('alertDialog', { static: true })
  public alertDialog: AlertDialogComponent;

  constructor(private alunoService: AlunoService) {
  }

  ngOnInit() {
    this.alunoService.getAll().subscribe((alunos: AlunoModel[]) => {
      if (alunos) {
        this.alunos = alunos;
      }
    });
  }

  public newAluno(): void {
    this.aluno = new AlunoModel();
    this.displayDialog();
  }

  public closeDialog(): void {
    this.modalForm.close();
  }

  public displayDialog(): void {
    // this.show = !this.show;
    if (this.aluno.id) {
      this.modalForm.title = 'Atualizar o usuário';
      this.modalForm.open();
    } else {
      this.modalForm.title = 'Criar novo usuário';
      this.modalForm.open();
    }
  }

  public save() {
    this.isSave = true;
    this.modalForm.close();
  }

  public confirmRemove(aluno: AlunoModel) {
    this.alertDialog.title = 'Atenção!';
    this.alertDialog.contentBody = 'Você deseja realmente remover este aluno?';
    this.alertDialog.confirmationMode = true;
    this.alertDialog.openDialog();
  }

  public remove(event: boolean): void {
    if (event !== undefined && event === true) {
      console.log('Remove');
    } else {
      console.log('NÃO Remove');
    }
  }

}
