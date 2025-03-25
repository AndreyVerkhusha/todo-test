import { FormControlLabel } from '@mui/material';
import React, { FC } from 'react';

import { CheckboxChangeEvent, Todo } from '@/shared/types/Todo';
import { Checkbox } from '@/shared/ui/checkbox';

import { TodoItemContainer, TodoItemLabel } from './todo-list-item.styles';

type TodoListItemProps = {
  onChange: (e: CheckboxChangeEvent) => void;
} & Todo;

export const TodoListItem: FC<TodoListItemProps> = ({ label, checked, onChange }) => {
  return (
    <TodoItemContainer>
      <FormControlLabel
        label={<TodoItemLabel checked={checked}>{label}</TodoItemLabel>}
        control={<Checkbox onChange={onChange} checked={checked} />}
      />
    </TodoItemContainer>
  );
};
