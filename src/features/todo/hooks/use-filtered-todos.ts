import { useCallback, useEffect, useState } from 'react';

import { Todo } from '@/shared/types/Todo';
import { useAppSelector } from '@/store';

export const useFilteredTodos = () => {
  const { todoList, alignment } = useAppSelector(({ todoReducer }) => todoReducer);

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [count, setCount] = useState(0);

  const getFilteredTodos = useCallback(() => {
    switch (alignment) {
      case 'active':
        return todoList.filter((todo) => !todo.checked);
      case 'completed':
        return todoList.filter((todo) => todo.checked);
      case 'all':
      default:
        return todoList;
    }
  }, [alignment, todoList]);

  useEffect(() => {
    const todos = getFilteredTodos();

    setFilteredTodos(todos);
    setCount(todos.length);
  }, [todoList, alignment, getFilteredTodos]);

  return { filteredTodos, count };
};
