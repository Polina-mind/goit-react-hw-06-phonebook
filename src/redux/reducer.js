import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, changeFilter } from './actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    state.map(({ name }) => {
      if (name.toLowerCase().includes(payload.name.toLowerCase())) {
        return alert('Contact already exist');
      }
      return [...state, payload];
    });
    return [...state, payload];
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
