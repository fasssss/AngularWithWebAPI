import { Action } from "@ngrx/store";
import { Hero } from "../../modules/heroes-module/models/hero";

export enum DeleteActionsTypes{
  DELETE_REQUEST = "Deletion request",
  DELETE_SUCCESS = "Deletion success",
  DELETE_FAILURE = "Deletion failure"
}

export class DeleteActionRequest implements Action{
  readonly type = DeleteActionsTypes.DELETE_REQUEST;

  constructor(public payload: {name: string}) {}
}

export class DeleteActionSuccess implements Action{
  readonly type = DeleteActionsTypes.DELETE_SUCCESS;

  constructor(public payload: {result: string}) {}
}

export class  DeleteActionFailure implements Action{
  readonly type = DeleteActionsTypes.DELETE_FAILURE;

  constructor(public payload: {error: string}) {}
}

export type Actions = DeleteActionRequest | DeleteActionSuccess | DeleteActionFailure;
