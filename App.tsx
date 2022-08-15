import * as React from 'react';
import './style.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { applyMiddleware } from 'redux';
import store from './store';
import { createAction } from './utils';
import Counter from './components/Counter;';
import DataList from './components/DataList;';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <DataList />
    </Provider>
  );
}
