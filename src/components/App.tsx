import React, { FC } from 'react';
import { connect } from 'react-redux';

import { fetchTodos, deleteToDo } from '../store/actions';
import { IStoreState, Todo } from '../typings';

interface IProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteToDo: Function;
}

const App: FC<IProps> = ({ todos, fetchTodos, deleteToDo }): JSX.Element => {
  const handleFetch = (): void => {
    fetchTodos();
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return (
        <div>
          {todo.title}&nbsp;
          <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={handleFetch}>Fetch To Do</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {renderList()}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ todos }: IStoreState): { todos: Todo[] } => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteToDo })(App);
