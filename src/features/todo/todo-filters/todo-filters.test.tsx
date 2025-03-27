import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { useFilteredTodos } from '../hooks/use-filtered-todos';
import todoReducer, { changeTodoAlignment, TodoState } from '../todo-slice';
import { TodoFilters } from './todo-filters';

jest.mock('@/features/todo/hooks/use-filtered-todos', () => ({
  useFilteredTodos: jest.fn(),
}));

describe('TodoFilters components', () => {
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
    (useFilteredTodos as jest.Mock).mockReturnValue({ count: 5, filteredTodos: [] });
  });

  it('correct count number', () => {
    render(
      <Provider store={mockStore}>
        <TodoFilters />
      </Provider>,
    );

    expect(screen.getByText('5 items')).toBeInTheDocument();
  });

  it('change alignments after click button', () => {
    render(
      <Provider store={mockStore}>
        <TodoFilters />
      </Provider>,
    );

    const completedButton = screen.getByRole('button', { name: 'Completed' });
    const activeButton = screen.getByRole('button', { name: 'Active' });

    fireEvent.click(activeButton);
    expect(mockStore.dispatch).toHaveBeenCalledWith(changeTodoAlignment('active'));

    fireEvent.click(completedButton);
    expect(mockStore.dispatch).toHaveBeenCalledWith(changeTodoAlignment('completed'));

    expect(mockStore.dispatch).toHaveBeenCalledTimes(2);
  });

  it('not called dispatch', () => {
    render(
      <Provider store={mockStore}>
        <TodoFilters />
      </Provider>,
    );

    const invalidButton = screen.queryByRole('button', { name: 'Invalid' });
    invalidButton && fireEvent.click(invalidButton);

    expect(mockStore.dispatch).not.toHaveBeenCalled();
  });
});
