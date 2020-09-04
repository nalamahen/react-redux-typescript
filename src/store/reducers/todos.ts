import { AnyAction } from 'redux';

import { ActionTypes, Todo } from '../../typings';

export const todoReducer = (state: Todo[] = [], action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
