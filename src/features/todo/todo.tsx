import React from 'react';

import { TodoWrapper } from './todo.styles';
import { TodoFilters } from './todo-filters';
import { TodoListContent } from './todo-list-content/todo-list-content';

export const Todo = () => {
  return (
    <TodoWrapper elevation={5}>
      <TodoListContent />
      <TodoFilters />
    </TodoWrapper>
  );
};
