import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { TodoListItem } from './todo-list-item';

describe('TodoListItem', () => {
  const mockOnChange = jest.fn();

  const defaultProps = {
    label: 'Test Todo',
    checked: false,
    id: 1,
    onChange: mockOnChange,
  };

  it('call onChange when checkbox click', () => {
    render(<TodoListItem {...defaultProps} />);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('correct render with check = false', () => {
    render(<TodoListItem {...defaultProps} />);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('correct render with check = true', () => {
    render(<TodoListItem {...{ ...defaultProps, checked: true }} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});
