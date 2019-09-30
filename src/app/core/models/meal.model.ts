import { ClientModel } from './client.model';
import { MealType } from './meal-type.model';

export class MealModel {
  public id: number;
  public dataHora: Date;
  public valor: number;
  public cliente: ClientModel;
  public tipoRefeicao: MealType;
}
