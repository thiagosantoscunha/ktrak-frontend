import { Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, AfterContentInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { switchMap, tap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { ViaCepService } from 'src/app/core/services/via-cep.service';
import { ViaCepModel } from 'src/app/core/models/via-cep.model';

import { Observable } from 'rxjs';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { AlunosService } from 'src/app/services/alunos.service';
import { EstadoUtil } from 'src/utils/estado-util.model';


@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit, AfterViewChecked, OnChanges {

  public formAluno: FormGroup;
  public cepControl: FormControl;

  private _aluno: AlunoModel = new AlunoModel();

  @Input('aluno')
  set aluno(aluno: AlunoModel) {
    this._aluno = aluno;
    this.formAluno.patchValue({
      nome: this._aluno.nome,
      dataNascimento: this._aluno.dataNascimento,
      cepControl: this._aluno.cep,
      logradouro: this._aluno.logradouro,
      bairro: this._aluno.bairro,
      cidade: this._aluno.cidade,
      estado: this._aluno.estado
    });
  }

  @Input()
  public wasSave = false;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: ViaCepService,
    private alunoService: AlunosService,
    private router: Router
  ) {
  }

  ngOnChanges() {

  }

  ngOnInit() {

    this.formAlunoInit();

  }

  ngAfterViewChecked(): void {
    if (this.wasSave !== null && this.wasSave !== undefined && this.wasSave === true) {
      this.save();
      this.wasSave = false;
    }
  }

  formAlunoInit(): void {
    this.cepControl = this.formBuilder.control('');
    this.cepControl.valueChanges.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      tap((val) => null),
      switchMap((value) => this.cepService.getAddressByCep(value)),
      catchError((error) => of([error]))
    ).subscribe((address: ViaCepModel) => {
      this.formAluno.patchValue({
        logradouro: address.logradouro,
        bairro: address.bairro,
        cidade: address.localidade,
        estado: address.uf
      });
    }, (error) => console.error(error));

    this.formAluno = this.formBuilder.group({
      nome: this.formBuilder.control(''),
      dataNascimento: this.formBuilder.control(''),
      cepControl: this.cepControl,
      logradouro: this.formBuilder.control(''),
      bairro: this.formBuilder.control(''),
      cidade: this.formBuilder.control(''),
      estado: this.formBuilder.control(''),
      digital: this.formBuilder.control('')
    });
  }

  save() {
    console.log('indicado', this.formAluno);
    this._aluno.nome = this.formAluno.value.nome;
    this._aluno.dataNascimento = this.formAluno.value.dataNascimento;
    this._aluno.cep = this.formAluno.value.cepControl;
    this._aluno.logradouro = this.formAluno.value.logradouro;
    this._aluno.bairro = this.formAluno.value.bairro;
    this._aluno.cidade = this.formAluno.value.cidade;
    this._aluno.digital = this.formAluno.value.digital;
    this._aluno.estado = this.formAluno.value.estado;

    if (this._aluno.estado.length === 2) {
      this._aluno.estado = EstadoUtil.getBySigla(this._aluno.estado);
    }

    console.log('aluno tem: ', this._aluno.id);
    if (this._aluno.id === undefined) {
      this.create();
    } else {
      this.update();
    }
  }

  public create(): void {
    console.log('entrou no metodo criar');
    this.alunoService.insert(this._aluno).subscribe((aluno: AlunoModel) => {
      if (aluno) {
        this._aluno = aluno;
        alert('Aluno ' + aluno.nome + ' inserido com sucesso');
      }
    });
  }

  update(): void {
    console.log('entrou no metodo atualizar');
    this.alunoService.update(this._aluno).subscribe((aluno: AlunoModel) => {
      if (aluno) {
        this._aluno = aluno;
        alert('Aluno ' + aluno.nome + ' atualizado com sucesso');
      }
    });
  }

  toggleShow() {

  }



}
