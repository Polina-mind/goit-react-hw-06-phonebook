import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, changeFilter } from './actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    const sameName = state.filter(
      ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
    );

    if (sameName.length > 0) {
      alert('Contact already exist');
      return [...state];
    } else {
      return [...state, payload];
    }
  },

  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
