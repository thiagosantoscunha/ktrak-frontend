import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, AfterContentInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { switchMap, tap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { ViaCepService } from 'src/app/core/services/via-cep.service';
import { ViaCepModel } from 'src/app/core/models/via-cep.model';

import { Observable } from 'rxjs';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { AlunoService } from 'src/app/core/services/aluno.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';


@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit, AfterViewChecked {

  public formAluno: FormGroup;
  public cepControl: FormControl;
  public aluno: AlunoModel;

  @Input()
  public wasSave = false;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: ViaCepService,
    private alunoService: AlunoService
  ) {
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
    this.cepControl.valueChanges.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      tap((val) => console.log(val)),
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

  }

  save() {
    this.aluno = new AlunoModel();
    this.aluno.nome = this.formAluno.value.nome;
    this.aluno.dataNascimento = this.formAluno.value.dataNascimento;
    this.aluno.cep = this.formAluno.value.cep;
    this.aluno.logradouro = this.formAluno.value.logradouro;
    this.aluno.bairro = this.formAluno.value.bairro;
    this.aluno.cidade = this.formAluno.value.cidade;
    this.aluno.estado = this.formAluno.value.estado;
    this.aluno.digital = this.formAluno.value.digital;

    this.create();
  }

  public create(): void {
    this.alunoService.insert(this.aluno).subscribe((aluno: AlunoModel) => {
      if (aluno) {
        this.aluno = aluno;
      }
    });
  }

  toggleShow() {

  }

}
