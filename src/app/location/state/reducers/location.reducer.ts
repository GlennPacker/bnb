import { createReducer, on } from '@ngrx/store';
import Activity from '../../models/location';
import * as actions from '../actions';

export interface State {
  error: Error,
  locations: Activity[];
}

export const initialState: State = {
  locations: [],
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

  on(actions.setError, (state, { error }) => {
    return {
      ...state,
      error,
    }
  })
) 