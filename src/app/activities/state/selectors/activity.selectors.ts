import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from '../reducers';

const selectFeature = createFeatureSelector<fromStore.State>('activity');

export const activityList = createSelector(selectFeature, (state: fromStore.State) => {
  return state && state.activities;
});