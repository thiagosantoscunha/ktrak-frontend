export class ClientModel {
  public id: number;
  public numero: number;
  public nome: string;
  public dataNascimento: Date;
  public dataAtivacao: Date;
  public dataDesativacao: Date;
  public tipoCliente: TipoClient;
  public ativo: boolean;
}

enum TipoClient {
  FUNCIONARIO, ALUNO, VISITANTE
}
