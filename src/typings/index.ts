export interface IStoreState {
  todos: Todo[];
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export enum ActionTypes {
  fetchTodos,
}
