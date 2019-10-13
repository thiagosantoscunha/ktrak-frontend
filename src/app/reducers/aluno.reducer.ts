import { AlunoModel } from '../core/models/aluno.model';
import { ActionModel } from '../core/models/action.model';
import { ActionTypes } from '../actions/aluno.action';

export const aluno = new AlunoModel();

export function alunoReducer(state = aluno, action: ActionModel) {
  switch (action.type) {
    case ActionTypes.Add: {
      state = action.payload;
      return state;
    }
  }
}
