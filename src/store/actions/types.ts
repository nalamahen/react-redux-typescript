import { DeleteTodoAction, FetchTodosAction } from '../actions';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
