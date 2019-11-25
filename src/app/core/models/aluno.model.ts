import { StatusPessoa } from './../enums/status-pessoa.model';
export class AlunoModel {
  public id: any;
  public nome: string;
  public dataNascimento: Date;
  public cep: string;
  public logradouro: string;
  public bairro: string;
  public cidade: string;
  public estado: string;
  public status?: string;
  public digital?: boolean;
  public isSelected = false;
}
