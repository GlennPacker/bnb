import { createAction, props } from '@ngrx/store';
import Location from '../models/location';
import LocationSearch from '../models/locationSearch';

export const locationsLoad = createAction(
  '[location] load list',
);

export const locationsLoaded = createAction(
  '[location] list loaded',
  props<{ locations: Location[] }>()
);

export const setLocationSearchTerms = createAction(
  '[location] Set Location Search Terms',
  props<{ searchTerm: LocationSearch }>()
);

export const setError = createAction(
  '[location] Error',
  props<{ error: Error }>()
)