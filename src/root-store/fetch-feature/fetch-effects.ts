import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {Observable, of} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import {DataService} from "../../modules/heroes-module/services/data.service";
import * as fetchActions from "./fetch-actions";
import {Hero} from "../../modules/heroes-module/models/hero";

@Injectable()
export class fetchFeatureEffects{
  constructor(private dataService: DataService, private actions$: Actions) {
  }

  fetchRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType<fetchActions.FetchActionRequest>(fetchActions.FetchActionsTypes.FETCH_REQUEST),
        switchMap(action => this.dataService.fetch(
            action.payload.name).pipe(
            map(result => new fetchActions.FetchActionSuccess({result: <Array<Hero>> result})),
            catchError(error => of(new fetchActions.FetchActionFailure({ error })))
          )
        )
      );
    }
  )
}
