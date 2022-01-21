import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {Observable, of} from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import {DataService} from "../../modules/heroes-module/services/data.service";
import * as deleteActions from "./delete-actions";

@Injectable()
export class deleteFeatureEffects{
  constructor(private dataService: DataService, private actions$: Actions) {
  }

  deleteRequestEffect$: Observable<Action> = createEffect(() => {
      return this.actions$.pipe(
        ofType<deleteActions.DeleteActionRequest>(deleteActions.DeleteActionsTypes.DELETE_REQUEST),
        switchMap(action => this.dataService.delete(
            action.payload.name).pipe(
            map(result => new deleteActions.DeleteActionSuccess({result: result.result!})),
            catchError(error => of(new deleteActions.DeleteActionFailure({ error })))
          )
        )
      );
    }
  )
}
