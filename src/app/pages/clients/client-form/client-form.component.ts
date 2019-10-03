import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ClientModel } from 'src/app/core/models/client.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit, AfterContentChecked {

  public client: ClientModel;

  public formClient: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private service: ClientService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getById(parseInt(id, 0));
    } else {
      this.client = new ClientModel();
    }
    this.clientForm();
  }

  ngAfterContentChecked(): void {
  }

  clientForm() {
    this.formClient = this.formBuilder.group({
      nome: this.formBuilder.control(this.client.nome, [Validators.required]),
      numero: this.formBuilder.control(this.client.numero, [Validators.required]),
      dataNascimento: this.formBuilder.control(this.client.dataNascimento, [Validators.required]),
      tipoCliente: this.formBuilder.control(this.client.tipoCliente, [Validators.required]),
    });
  }

  getById(id: number) {
    this.service.getById(id).subscribe((c) => {
      if (c) {
        this.client = c;
        console.log(this.client.dataAtivacao);
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  save() {
    this.client = new ClientModel();
    this.client.nome = this.formClient.value.nome;
    this.client.numero = this.formClient.value.numero;
    this.client.dataNascimento = this.formClient.value.dataNascimento;
    this.client.tipoCliente = this.formClient.value.tipoCliente;
    if (this.client.id) {
      this.update();
    } else {
      this.create();
    }
  }

  update() {
  }

  create() {
    this.service.insert(this.client).subscribe((result) => {
      if (result === null || result === undefined) {
        console.log('erro');
      }
    }, (error) => {
        console.error(error);
    });
  }

  formIsValid(): boolean {
    return this.formClient.valid;
  }

}
