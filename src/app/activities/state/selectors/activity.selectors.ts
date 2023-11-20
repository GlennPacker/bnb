import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from '../reducers';

const selectFeature = createFeatureSelector<fromStore.State>('activity');

export const activityList = createSelector(selectFeature, (state: fromStore.State) => {
  return state && state.activities;
});

export const filteredActivityList = createSelector(selectFeature, (state: fromStore.State) => {
  console.log('state', state, state && state.searchTerm);
  if (!state) return []
  if (!state.searchTerm || (!state.searchTerm.facility && !state.searchTerm.searchTerm)) return state.activities;

  const search = (state.searchTerm.searchTerm || '').toLocaleLowerCase();
  const facility = state.searchTerm.facility;

  return state.activities.filter(act =>
    (search && act.title.includes(search)) ||
    act.activityType === facility ||
    (search && (act.paras || []).some(para => para.toLocaleLowerCase().includes(search))));
});