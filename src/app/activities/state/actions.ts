import { createAction, props } from '@ngrx/store';
import Search from 'src/app/component-library/models/Search';
import Activity from '../models/activity';

export const activitiesLoad = createAction(
  '[activity] load list',
);

export const activitiesLoaded = createAction(
  '[activity] list loaded',
  props<{activities: Activity[]}>()
);

export const setSearchTerms = createAction(
  '[location] Set Activity Search Terms',
  props<{ searchTerm: Search }>()
);

export const setError = createAction(
  '[activity] Error',
  props<{ error: Error}>()
)