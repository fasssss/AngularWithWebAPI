import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero'

export enum PostActionsTypes{
  POST_REQUEST = 'Create request',
  POST_SUCCESS = 'Create success',
  POST_FAILURE = 'Create failure',
}

export class PostRequestAction implements Action{
  readonly type = PostActionsTypes.POST_REQUEST;
  constructor(public payload: {
    name: string,
    heroPoints: number,
    age: number,
    height: number,
    superPowers: string,
    superVillain: string
  }) {}
}

export class PostSuccessAction implements Action {
  readonly type = PostActionsTypes.POST_SUCCESS;

  constructor(public payload: {
    hero: Hero
  }) {}
}

export class PostFailureAction implements Action {
  readonly type = PostActionsTypes.POST_FAILURE;

  constructor(public payload: {
    error: string | any;
  }) {}
}

export type Actions = PostRequestAction | PostSuccessAction | PostFailureAction;
