import { Action } from '@ngrx/store';

export enum ActionTypes {
  Add = 'ADD'
}

export const Add = (aluno: any) => {
  return { type: ActionTypes.Add, payload: aluno } as Action;
};
