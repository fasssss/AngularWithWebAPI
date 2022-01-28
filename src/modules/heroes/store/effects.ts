import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {Observable, of} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import {DataService} from "../services/data.service";
import * as actions from "./actions";
import {Hero} from "../models/hero";

@Injectable()
export class heroesFeatureEffects{
  constructor(private dataService: DataService, private actions$: Actions) {
  }

  deleteRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType<actions.DeleteActionRequest>(actions.ActionsTypes.DELETE_REQUEST),
        switchMap(action => this.dataService.delete(
            action.payload.name).pipe(
            map(result => new actions.DeleteActionSuccess({result: result.result!})),
            catchError(error => of(new actions.DeleteActionFailure({ error })))
          )
        )
      );
    }
  )

  fetchRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType<actions.FetchActionRequest>(actions.ActionsTypes.FETCH_REQUEST),
        switchMap(action => this.dataService.fetch(
            action.payload.name).pipe(
            map(result => new actions.FetchActionSuccess({result: <Array<Hero>> result})),
            catchError(error => of(new actions.FetchActionFailure({ error })))
          )
        )
      );
    }
  )

  postRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType<actions.PostRequestAction>(actions.ActionsTypes.POST_REQUEST),
        switchMap(action => this.dataService.post(
            action.payload.name,
            action.payload.heroPoints,
            action.payload.age,
            action.payload.height,
            action.payload.superPowers,
            action.payload.superVillain).pipe(
            map(hero => new actions.PostSuccessAction({ hero })),
            catchError(error => of(new actions.PostFailureAction({ error })))
          )
        )
      );
    }
  )

  updateRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType<actions.UpdateRequestAction>(actions.ActionsTypes.UPDATE_REQUEST),
        switchMap(action => this.dataService.update(
            action.payload.name,
            action.payload.heroPoints,
            action.payload.age,
            action.payload.height,
            action.payload.superPowers,
            action.payload.superVillain).pipe(
            map(hero => new actions.UpdateSuccessAction({ hero })),
            catchError(error => of(new actions.UpdateFailureAction({ error })))
          )
        )
      );
    }
  )
}
