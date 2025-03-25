import React from 'react';

import { InputField } from '@/shared/ui/input-field';
import { useAppDispatch } from '@/store';

import { createNewTodo } from '../todo-slice';
import { InputWrapper } from './todo-input-manager.styles';

export const TodoInputManager = () => {
  const dispatch = useAppDispatch();

  const submitNewTodo = (value: string) => {
    dispatch(createNewTodo(value));
  };

  return (
    <InputWrapper>
      <InputField placeholder="add new todo" textButton="Create todo" onSubmit={submitNewTodo} />
    </InputWrapper>
  );
};
