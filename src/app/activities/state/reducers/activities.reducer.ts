import { createReducer, on } from '@ngrx/store';
import Activity from '../../models/activity';
import * as actions from '../actions';

export interface State {
  activities: Activity[];
  error: Error,
}

export const initialState: State = {
  activities: [],
  error: null
};

export const activitiesReducer = createReducer(
  initialState,
  
  on(actions.activitiesLoaded, (state, { activities }) => {
    return {
      ...state,
      activities,
    }
  }),

  on(actions.setError, (state, { error }) => {
    return {
      ...state,
      error,
    }
  })
) 