import { createReducer, on } from '@ngrx/store';
import Activity from '../../models/location';
import LocationSearch from '../../models/locationSearch';
import * as actions from '../actions';

export interface State {
  error: Error,
  locations: Activity[];
  searchTerm: LocationSearch;
}

export const initialState: State = {
  locations: [],
  searchTerm: null,
  error: null
};

export const locationsReducer = createReducer(
  initialState,

  on(actions.locationsLoaded, (state, { locations }) => {
    return {
      ...state,
      locations,
    }
  }),

  on(actions.setLocationSearchTerms, (state, { searchTerm }) => {
    const search = {
      ...searchTerm,
      searchTerm: (searchTerm.searchTerm || '').toLocaleLowerCase()
    }

    console.log('search', search);

    return {
      ...state,
      searchTerm: search,
    }
  }),

  on(actions.setError, (state, { error }) => {
    return {
      ...state,
      error,
    }
  })
) 