import { DiaHoraAula } from './../models/dia-hora-aula.model';
export abstract class DiaHoraAulaValidator {
  static naoPodeAdicionar(model: DiaHoraAula): boolean {
    if (model.dia === undefined || model.dia === '') {
      return true;
    }
    if (model.hora === undefined || model.hora === '') {
      return true;
    }
    return false;
  }
}
