import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { DisciplinaService } from './../../services/disciplina.service';
import { DisciplinaModel } from './../../core/models/disciplina.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss']
})
export class DisciplinasComponent implements OnInit {

  disciplinas: DisciplinaModel[];
  disciplina: DisciplinaModel;
  show: boolean;

  @ViewChild('modalForm', { static: true })
  modalForm: ModalComponent;

  @ViewChild('alertDialog', { static: true })
  dialog: AlertDialogComponent;

  disciplinaForm: FormGroup;

  constructor(private fb: FormBuilder, private disciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.initForm();
    this.findAll();
  }

  findAll() {
    this.disciplinaService.findAll().subscribe((disciplinas: DisciplinaModel[]) => {
      this.disciplinas = disciplinas;
      console.log(this.disciplinas);
    }, (error: HttpErrorResponse) => {
        console.error(error);
    });
  }

  initForm() {
    this.disciplinaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]]
    });
  }

  novo() {
    this.disciplina = new DisciplinaModel();
    this.modalForm.title = 'Nova Disciplina';
    this.modalForm.open();
    this.initForm();
  }

  save() {
    this.disciplina.nome = this.disciplinaForm.value.nome;
    if (this.disciplina.id === undefined) {
      this.create();
    } else {
      this.update();
    }
  }

  update() {
    this.disciplinaService.update(this.disciplina).subscribe((disciplina: DisciplinaModel) => {
      this.dialog.build('Sucesso', 'Deu bom ao atualizar a nova disciplina', 'success');
      this.modalForm.close();
      this.dialog.openDialog();
      this.findAll();
    }, (error: HttpErrorResponse) => {
      this.dialog.build('Error', error.error.message, 'warning');
      this.dialog.openDialog();
      console.error(error);
    });
  }

  create() {
    this.disciplinaService.insert(this.disciplina).subscribe((disciplina: DisciplinaModel) => {
      this.dialog.build('Sucesso', 'Deu bom ao adicionar a nova disciplina', 'success');
      this.modalForm.close();
      this.dialog.openDialog();
      this.findAll();
    }, (error: HttpErrorResponse) => {
        this.dialog.build('Error', error.error.message, 'warning');
        this.dialog.openDialog();
        console.error(error);
    });
  }

  initEdit(d: DisciplinaModel) {
    this.disciplina = d;
    console.log('disciplina selecionada', this.disciplina);
    this.disciplinaForm.patchValue({
      nome: this.disciplina.nome
    });
    this.modalForm.title = 'Atualização da disciplina';
    this.modalForm.open();
  }

  initRemove(d: DisciplinaModel) {
    console.log('d', d);
    this.disciplina = d;
    this.dialog.build('Atenção', 'Você deseja realmente remover a disciplina ' + d.nome + '?', 'warning', true);
    this.dialog.openDialog();
  }

  closeDialog() {
    this.modalForm.close();
  }

  podeRemover(event: boolean) {
    if (event === true) {
      this.disciplinaService.deleteById(this.disciplina.id).subscribe(resp => {
        this.findAll();
      }, (error: HttpErrorResponse) => {
        this.dialog.build('Error', error.error.message, 'danger');
        this.dialog.openDialog();
      });
    }
  }

}
