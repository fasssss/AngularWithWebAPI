import {Action} from "@ngrx/store";
import {Hero} from "../models/hero";

export enum ActionsTypes{
  DELETE_REQUEST = "Deletion request",
  DELETE_SUCCESS = "Deletion success",
  DELETE_FAILURE = "Deletion failure",
  FETCH_REQUEST = "Fetching request",
  FETCH_SUCCESS = "Fetching success",
  FETCH_FAILURE = "Fetching failure",
  POST_REQUEST = 'Create request',
  POST_SUCCESS = 'Create success',
  POST_FAILURE = 'Create failure',
  UPDATE_REQUEST = 'Update request',
  UPDATE_SUCCESS = 'Update success',
  UPDATE_FAILURE = 'Update failure',
}

export class DeleteActionRequest implements Action{
  readonly type = ActionsTypes.DELETE_REQUEST;

  constructor(public payload: {name: string}) {}
}

export class DeleteActionSuccess implements Action{
  readonly type = ActionsTypes.DELETE_SUCCESS;

  constructor(public payload: {result: string}) {}
}

export class  DeleteActionFailure implements Action{
  readonly type = ActionsTypes.DELETE_FAILURE;

  constructor(public payload: {error: string}) {}
}

export class FetchActionRequest{
  readonly type = ActionsTypes.FETCH_REQUEST;

  constructor(public payload: {name: string | null}) {}
}

export class FetchActionSuccess{
  readonly type = ActionsTypes.FETCH_SUCCESS;

  constructor(public payload: {result: Array<Hero> | null}) {}
}

export class FetchActionFailure{
  readonly type = ActionsTypes.FETCH_FAILURE;

  constructor(public payload:{error: string | null}) {}
}

export class PostRequestAction implements Action{
  readonly type = ActionsTypes.POST_REQUEST;
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
  readonly type = ActionsTypes.POST_SUCCESS;

  constructor(public payload: {
    hero: Hero
  }) {}
}

export class PostFailureAction implements Action {
  readonly type = ActionsTypes.POST_FAILURE;

  constructor(public payload: {
    error: string | any;
  }) {}
}

export class UpdateRequestAction implements Action{
  readonly type = ActionsTypes.UPDATE_REQUEST;
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
  readonly type = ActionsTypes.UPDATE_SUCCESS;

  constructor(public payload: {
    hero: Hero
  }) {}
}

export class UpdateFailureAction implements Action {
  readonly type = ActionsTypes.UPDATE_FAILURE;

  constructor(public payload: {
    error: string | any;
  }) {}
}

export type Actions =
  DeleteActionRequest | DeleteActionSuccess | DeleteActionFailure |
  FetchActionRequest | FetchActionSuccess | FetchActionFailure |
  PostRequestAction | PostSuccessAction | PostFailureAction |
  UpdateRequestAction | UpdateSuccessAction | UpdateFailureAction;
