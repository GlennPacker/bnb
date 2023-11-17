import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from '../reducers';

const selectFeature = createFeatureSelector<fromStore.State>('location');

export const locationList = createSelector(selectFeature, (state: fromStore.State) => {
  return state && state.locations;
});