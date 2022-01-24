import { Action } from "@ngrx/store";
import { Hero } from "../../models/hero";

export enum FetchActionsTypes {
  FETCH_REQUEST = "Fetching request",
  FETCH_SUCCESS = "Fetching success",
  FETCH_FAILURE = "Fetching failure",
}

export class FetchActionRequest{
  readonly type = FetchActionsTypes.FETCH_REQUEST;

  constructor(public payload: {name: string | null}) {}
}

export class FetchActionSuccess{
  readonly type = FetchActionsTypes.FETCH_SUCCESS;

  constructor(public payload: {result: Array<Hero> | null}) {}
}

export class FetchActionFailure{
  readonly type = FetchActionsTypes.FETCH_FAILURE;

  constructor(public payload:{error: string | null}) {}
}

export type Actions = FetchActionRequest | FetchActionSuccess | FetchActionFailure;
