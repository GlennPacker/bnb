import { createAction, props } from '@ngrx/store';
import Activity from '../models/activity';

export const activitiesLoad = createAction(
  '[activity] load list',
);

export const activitiesLoaded = createAction(
  '[activity] list loaded',
  props<{activities: Activity[]}>()
);

export const setError = createAction(
  '[activity] Error',
  props<{ error: Error}>()
)