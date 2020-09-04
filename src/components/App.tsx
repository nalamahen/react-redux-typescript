import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchTodos, deleteToDo } from '../store/actions';
import { IStoreState, Todo } from '../typings';

interface IProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteToDo: Function;
}

interface IState {
  fetching: boolean;
}

const App: FC<IProps> = ({ todos, fetchTodos, deleteToDo }): JSX.Element => {
  const [fetching, setFetching] = useState(false);

  const handleFetch = (): void => {
    fetchTodos();
    setFetching(true);
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

  useEffect(() => {
    setFetching(false);
  }, [fetching]);

  return (
    <React.Fragment>
      <div>
        <button onClick={handleFetch}>Fetch To Do</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {fetching ? 'Loading' : null}
        {renderList()}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ todos }: IStoreState): { todos: Todo[] } => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteToDo })(App);
