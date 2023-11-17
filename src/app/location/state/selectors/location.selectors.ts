import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from '../reducers';

const selectFeature = createFeatureSelector<fromStore.State>('location');

export const locationList = createSelector(selectFeature, (state: fromStore.State) => {
  return state && state.locations;
});

export const locationSearchedList = createSelector(selectFeature, (state: fromStore.State) => {
  if (!state) return []
  if (!state.searchTerm || (!state.searchTerm.facility && !state.searchTerm.searchTerm)) return state.locations;

  const search = (state.searchTerm.searchTerm || '').toLocaleLowerCase();
  const facility = state.searchTerm.facility;

  return state.locations.filter(loc =>
    (search && loc.title.includes(search)) ||
    loc.facilities.some(f => f.description === facility) ||
    (search && loc.paras.some(para => para.toLocaleLowerCase().includes(search))));
});