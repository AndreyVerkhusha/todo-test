import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { list } from '@/mock';
import { Alignments } from '@/shared/types/Filters';
import { Todo } from '@/shared/types/Todo';

export type TodoState = {
  todoList: Todo[];
  nextId: number;
  alignment: Alignments;
};

const initialState: TodoState = {
  todoList: list,
  nextId: list.length + 1,
  alignment: 'all',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createNewTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: state.nextId,
        label: action.payload,
        checked: false,
      };

      state.todoList.push(newTodo);
      state.nextId += 1;
    },
    toggleTodoChecked: (state, action: PayloadAction<{ id: number; checked: boolean }>) => {
      const todo = state.todoList.find((item) => item.id === action.payload.id);

      if (todo) {
        todo.checked = action.payload.checked;
      }
    },
    changeTodoAlignment: (state, action: PayloadAction<Alignments>) => {
      state.alignment = action.payload;
    },
  },
});

export const { createNewTodo, toggleTodoChecked, changeTodoAlignment } = todoSlice.actions;

export default todoSlice.reducer;
