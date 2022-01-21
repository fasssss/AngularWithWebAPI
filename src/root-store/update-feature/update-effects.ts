import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {Observable, of} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from "../../modules/heroes-module/services/data.service";
import * as updateActions from "./update-actions"

@Injectable()
export class updateFeatureEffects {
  constructor(private dataService: DataService, private actions$: Actions) {
  }

  updateRequestEffect$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<updateActions.UpdateRequestAction>(updateActions.UpdateActionsTypes.UPDATE_REQUEST),
      switchMap(action => this.dataService.update(
        action.payload.name,
        action.payload.heroPoints,
        action.payload.age,
        action.payload.height,
        action.payload.superPowers,
        action.payload.superVillain).pipe(
          map(hero => new updateActions.UpdateSuccessAction({ hero })),
          catchError(error => of(new updateActions.UpdateFailureAction({ error })))
        )
      )
    );
    }
  )
}
