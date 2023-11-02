import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import Activity from '../../models/activity';
import { ActivityService } from '../../services/activity.service';
import * as actions from '../actions';
import * as fromState from '../reducers';

export default {}

@Injectable()
export class ActivityEffects {
  loadActivities$ = createEffect(() => 
    this.actions$.pipe(
      ofType(actions.activitiesLoad),
      tap(() => console.log('Action One Dispatched')),
      switchMap(() => {
        return this.activityService.getAll().pipe(
          map((activities: Activity[]) => {
            return actions.activitiesLoaded({ activities });
          }),
          catchError(error => {
            this.store.dispatch(actions.setError({ error }));
            return throwError(() => error);
          })
        );
      })
    ))

  constructor(
    private actions$: Actions,
    private activityService: ActivityService,
    private store: Store<fromState.State>
  ) { }
}