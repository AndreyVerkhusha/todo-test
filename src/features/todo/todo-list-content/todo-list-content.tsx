import React, { useCallback } from 'react';

import { useFilteredTodos } from '@/features/todo/hooks/use-filtered-todos';
import { CheckboxChangeEvent } from '@/shared/types/Todo';
import { useAppDispatch } from '@/store';

import { TodoListItem } from '../todo-list-item';
import { toggleTodoChecked } from '../todo-slice';
import { TodoList } from './todo-list-content.styles';

export const TodoListContent = () => {
  const dispatch = useAppDispatch();

  const { filteredTodos } = useFilteredTodos();

  const handleChangeChecked = useCallback(
    (e: CheckboxChangeEvent, id: number) => {
      const checked = e.target.checked;

      dispatch(toggleTodoChecked({ id, checked }));
    },
    [dispatch],
  );

  return (
    <TodoList>
      {filteredTodos.map((elem) => (
        <TodoListItem key={elem.id} onChange={(e) => handleChangeChecked(e, elem.id)} {...elem} />
      ))}
    </TodoList>
  );
};
