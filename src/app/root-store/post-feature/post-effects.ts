import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {Observable, of} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from "../../services/data.service";
import * as postActions from "./post-actions"

@Injectable()
export class postFeatureEffects{
  constructor(private dataService: DataService, private actions$: Actions) {
  }

  postRequestEffect$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<postActions.PostRequestAction>(postActions.PostActionsTypes.POST_REQUEST),
      switchMap(action => this.dataService.post(
        action.payload.name,
        action.payload.heroPoints,
        action.payload.age,
        action.payload.height,
        action.payload.superPowers,
        action.payload.superVillain).pipe(
          map(hero => new postActions.PostSuccessAction({ hero })),
          catchError(error => of(new postActions.PostFailureAction({ error })))
        )
      )
    );
    }
  )
}
