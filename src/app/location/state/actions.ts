import { createAction, props } from '@ngrx/store';
import Search from '../../component-library/models/sssearch';
import Location from '../models/location';

export const locationsLoad = createAction(
  '[location] load list',
);

export const locationsLoaded = createAction(
  '[location] list loaded',
  props<{ locations: Location[] }>()
);

export const setSearchTerms = createAction(
  '[location] Set Location Search Terms',
  props<{ searchTerm: Search }>()
);

export const setError = createAction(
  '[location] Error',
  props<{ error: Error }>()
)