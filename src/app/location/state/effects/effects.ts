import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import Location from '../../models/location';
import { LocationService } from '../../services/location.service';
import * as actions from '../actions';
import * as fromState from '../reducers';

export default {}

@Injectable()
export class LocationEffects {
  loadActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.locationsLoad),
      tap(() => console.log('Action One Dispatched')),
      switchMap(() => {
        return this.locationService.get().pipe(
          map((locations: Location[]) => {
            return actions.locationsLoaded({ locations });
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
    private locationService: LocationService,
    private store: Store<fromState.State>
  ) { }
}