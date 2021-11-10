import { v4 as uuidv4 } from 'uuid';
import { ADD, DELETE, CHANGE_FILTER } from './types';

const addContact = ({ name, number }) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
});

const deleteContact = ContactId => ({
  type: DELETE,
  payload: ContactId,
});

const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

export { addContact, deleteContact, changeFilter };
