import { createAction, props } from '@ngrx/store';
import Location from '../models/location';

export const locationsLoad = createAction(
  '[location] load list',
);

export const locationsLoaded = createAction(
  '[location] list loaded',
  props<{ locations: Location[] }>()
);

export const setError = createAction(
  '[location] Error',
  props<{ error: Error }>()
)