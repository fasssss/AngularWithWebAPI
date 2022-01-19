import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero'

export enum UpdateActionsTypes{
  UPDATE_REQUEST = 'Update request',
  UPDATE_SUCCESS = 'Update success',
  UPDATE_FAILURE = 'Update failure',
}

export class UpdateRequestAction implements Action{
  readonly type = UpdateActionsTypes.UPDATE_REQUEST;
  constructor(public payload: {
    name: string,
    heroPoints: number,
    age: number,
    height: number,
    superPowers: string,
    superVillain: string
  }) {}
}

export class UpdateSuccessAction implements Action {
  readonly type = UpdateActionsTypes.UPDATE_SUCCESS;

  constructor(public payload: {
    hero: Hero
  }) {}
}

export class UpdateFailureAction implements Action {
  readonly type = UpdateActionsTypes.UPDATE_FAILURE;

  constructor(public payload: {
    error: string | any;
  }) {}
}

export type Actions = UpdateRequestAction | UpdateSuccessAction | UpdateFailureAction;
