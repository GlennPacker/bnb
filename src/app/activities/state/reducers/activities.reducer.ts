import { createReducer, on } from '@ngrx/store';
import Activity from '../../models/activity';
import * as actions from '../actions';
import Search from 'src/app/component-library/models/Search';

export interface State {
  activities: Activity[];
  error: Error,
  searchTerm: Search;
}

export const initialState: State = {
  activities: [],
  searchTerm: null,
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

  on(actions.setSearchTerms, (state, { searchTerm }) => {
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