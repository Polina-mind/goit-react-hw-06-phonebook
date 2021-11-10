import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
import { ADD, DELETE, CHANGE_FILTER } from './types';

const addContact = createAction(ADD, ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
}));

const deleteContact = createAction(DELETE);

const changeFilter = createAction(CHANGE_FILTER);

export { addContact, deleteContact, changeFilter };
