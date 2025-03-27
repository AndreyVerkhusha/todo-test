import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import todoReducer, { TodoState, toggleTodoChecked } from '../todo-slice';
import { TodoListContent } from './todo-list-content';

describe('TodoListContent', () => {
  const mockStore = configureStore({
    reducer: {
      todoReducer,
    },
    preloadedState: {
      todoReducer: {
        alignment: 'all',
        todoList: [
          { id: 1, label: 'Test Todo 1', checked: false },
          { id: 2, label: 'Test Todo 2', checked: true },
        ],
        nextId: 1,
      } as TodoState,
    },
  });

  beforeEach(() => {
    mockStore.dispatch = jest.fn();
  });

  it('renders todos', () => {
    render(
      <Provider store={mockStore}>
        <TodoListContent />
      </Provider>,
    );

    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
  });

  it('dispatch toggleTodoChecked on checkbox change', () => {
    render(
      <Provider store={mockStore}>
        <TodoListContent />
      </Provider>,
    );

    const checkbox1 = screen.getByLabelText('Test Todo 1');
    const checkbox2 = screen.getByLabelText('Test Todo 2');

    fireEvent.click(checkbox1);
    expect(mockStore.dispatch).toHaveBeenCalledWith(toggleTodoChecked({ id: 1, checked: true }));

    fireEvent.click(checkbox2);
    expect(mockStore.dispatch).toHaveBeenCalledWith(toggleTodoChecked({ id: 2, checked: false }));
  });
});
