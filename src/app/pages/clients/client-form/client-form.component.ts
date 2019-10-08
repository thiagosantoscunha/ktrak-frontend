import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null && id !== undefined) {
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
      nome: this.formBuilder.control('', [Validators.required]),
      numero: this.formBuilder.control('', [Validators.required]),
      dataNascimento: this.formBuilder.control('', [Validators.required]),
      tipoCliente: this.formBuilder.control('', [Validators.required]),
      ativo: this.formBuilder.control('', [Validators.required]),
    });
  }

  getById(id: number) {
    this.service.getById(id).subscribe((c) => {
      if (c) {
        this.client = c;
        console.log(this.client);
        this.formClient.patchValue({
          nome: this.client.nome,
          numero: this.client.numero,
          dataNascimento: this.client.dataNascimento,
          tipoCliente: this.client.tipoCliente,
          ativo: this.client.ativo,
        });
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  save() {
    this.client.nome = this.formClient.value.nome;
    this.client.numero = parseInt(this.formClient.value.numero, 0);
    this.client.dataNascimento = this.formClient.value.dataNascimento;
    this.client.tipoCliente = this.formClient.value.tipoCliente;
    this.client.ativo = this.formClient.value.ativo;

    if (this.client.id !== null && this.client.id !== undefined) {
      console.log('modo update');
      this.update();
    } else {
      this.create();
    }
  }

  update() {
    this.service.update(this.client).subscribe((client) => {
      this.router.navigate(['/clients']);
    });
  }

  create() {
    this.service.insert(this.client).subscribe((result) => {
      if (result !== null || result !== undefined) {
        console.log(result);
      }
    }, (error) => {
        console.error(error);
    });
  }

  formIsValid(): boolean {
    return this.formClient.valid;
  }

}
