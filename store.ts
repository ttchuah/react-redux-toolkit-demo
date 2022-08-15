import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import dataReducer from './dataSlice';
import { createPromise } from 'redux-promise-middleware';

export default configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
  devTools: true,
  middleware: [
    createPromise({
      promiseTypeDelimiter: '/',
    }),
  ],
});
