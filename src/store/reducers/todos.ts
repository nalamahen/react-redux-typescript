import { Action, ActionTypes } from '../actions/types';
import { Todo } from '../../typings';

export const todoReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
