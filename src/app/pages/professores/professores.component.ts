import { ModalComponent } from './../../components/modal/modal.component';
import { ViaCepModel } from './../../core/models/via-cep.model';
import { ViaCepService } from './../../core/services/via-cep.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertDialogComponent } from './../../components/alert-dialog/alert-dialog.component';
import { ProfessorService } from './../../services/professore.service';
import { ProfessorModel } from './../../core/models/professor.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { from, of } from 'rxjs';
import { EstadoUtil } from 'src/utils/estado-util.model';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  professores: ProfessorModel[];
  professor: ProfessorModel;


  professorForm: FormGroup;

  @ViewChild('alertDialog', { static: true })
  public dialog: AlertDialogComponent;

  @ViewChild('modalForm', { static: true })
  public modalForm: ModalComponent;


  constructor(private professorService: ProfessorService, private fb: FormBuilder, private cepService: ViaCepService) { }

  ngOnInit() {
    this.findAll();
    this.formProfessorInit();
  }

  formProfessorInit(): void {

    this.professorForm = this.fb.group({
      nome: this.fb.control(''),
      dataNascimento: this.fb.control(''),
      cep: this.fb.control(''),
      logradouro: this.fb.control(''),
      bairro: this.fb.control(''),
      cidade: this.fb.control(''),
      estado: this.fb.control(''),
      digital: this.fb.control('')
    });
  }

  findAll() {
    this.professorService.findAll().subscribe((professores: ProfessorModel[]) => {
      this.professores = professores;
    }, error => {
      console.error(error);
    });
  }

  toggleStatus(event, professor: ProfessorModel) {
    event.preventDefault();
    this.professor = professor;
    this.update();
    this.findAll();
  }

  edit(professor: ProfessorModel) {
    this.professor = professor;
    this.professorForm.patchValue({
      nome: this.professor.nome,
      dataNascimento: this.professor.dataNascimento,
      cep: this.professor.cep,
      logradouro: this.professor.logradouro,
      bairro: this.professor.bairro,
      cidade: this.professor.cidade,
      estado: this.professor.estado
    });
    this.modalForm.title = 'Atualizar Professor';
    this.modalForm.open();
  }

  showDetails(professor: ProfessorModel) { }

  closeDialog() {
    this.modalForm.close();
    this.professor = new ProfessorModel();
    this.findAll();
  }



  confirmRemove(professor: ProfessorModel) {
    this.professor = professor;
    this.dialog.build('Atenção', 'deseja realmente remover o professor ' + professor.nome + '?', 'warning', true);
    this.dialog.openDialog();
  }


  podeRemover(event: boolean) {
    if (event) {
      this.professorService.deleteById(this.professor.id).subscribe((result) => {
        this.findAll();
      }, (error: HttpErrorResponse) => {
        this.dialog.build('Error', error.error.message, 'danger');
        this.dialog.openDialog();
      });
    }
  }

  save() {

    this.professor.nome = this.professorForm.value.nome;
    this.professor.dataNascimento = this.professorForm.value.dataNascimento;
    this.professor.cep = this.professorForm.value.cep;
    this.professor.logradouro = this.professorForm.value.logradouro;
    this.professor.bairro = this.professorForm.value.bairro;
    this.professor.cidade = this.professorForm.value.cidade;
    this.professor.estado = this.professorForm.value.estado;

    if (this.professor.estado.length === 2) {
      this.professor.estado = EstadoUtil.getBySigla(this.professor.estado);
    }

    if (this.professor.id === undefined) {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this.professorService.insert(this.professor).subscribe((professor: ProfessorModel) => {
      this.dialog.build('Sucesso', 'Professor criado com sucesso', 'sucess');
      this.closeDialog();
    }, (error: HttpErrorResponse) => {
      this.dialog.build('Error', error.error.message, 'danger');
    });
  }

  update() {
    this.professorService.update(this.professor).subscribe((professor: ProfessorModel) => {
      this.dialog.build('Sucesso', 'Professor atualizado com sucesso', 'sucess');
      this.closeDialog();
    }, (error: HttpErrorResponse) => {
      this.dialog.build('Error', error.error.message, 'danger');
    });
  }

  novo() {
    console.log('inicia novo professor')
    this.professor = new ProfessorModel();
    this.modalForm.title = 'Novo Professor';
    this.formProfessorInit();
    this.modalForm.open();
  }


}
