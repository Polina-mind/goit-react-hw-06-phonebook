import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './reducer';

// console.log(getDefaultMiddleware());

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: reducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
