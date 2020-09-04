export interface IStoreState {
  todos: Todo[];
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
