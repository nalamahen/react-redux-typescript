import React, { FC } from 'react';
import { connect } from 'react-redux';

import { fetchTodos } from '../store/actions';
import { IStoreState, Todo } from '../typings';

interface IProps {
  todos: Todo[];
  fetchTodos(): any;
}

const App: FC<IProps> = ({ todos, fetchTodos }): JSX.Element => {
  const handleFetch = (): void => {
    fetchTodos();
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo) => <div key={todo.id}>{todo.title}</div>);
  };

  return (
    <div>
      <button onClick={handleFetch}>Fetch</button>
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: IStoreState): { todos: Todo[] } => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos })(App);
