import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import todoReducer, { createNewTodo, TodoState } from '../todo-slice';
import { TodoInputManager } from './todo-input-manager';

describe('TodoInputManager functionality', () => {
  const mockStore = configureStore({
    reducer: {
      todoReducer,
    },
    preloadedState: {
      todoReducer: {
        alignment: 'all',
        todoList: [],
        nextId: 1,
      } as TodoState,
    },
  });

  beforeEach(() => {
    mockStore.dispatch = jest.fn();
  });

  it('render input & button', () => {
    render(
      <Provider store={mockStore}>
        <TodoInputManager />
      </Provider>,
    );

    expect(screen.getByPlaceholderText('add new todo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create todo' })).toBeInTheDocument();
  });

  it('dispatch submit valid', () => {
    render(
      <Provider store={mockStore}>
        <TodoInputManager />
      </Provider>,
    );
    const inputField = screen.getByPlaceholderText('add new todo');
    const submitButton = screen.getByRole('button', { name: 'Create todo' });

    fireEvent.change(inputField, { target: { value: 'New Todo' } });
    fireEvent.click(submitButton);

    expect(mockStore.dispatch).toHaveBeenCalledWith(createNewTodo('New Todo'));
  });
});
