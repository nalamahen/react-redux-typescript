import { combineReducers } from 'redux';

import { todoReducer } from './todos';
import { IStoreState } from '../../typings/index';

export const reducers = combineReducers<IStoreState>({
  todos: todoReducer,
});
