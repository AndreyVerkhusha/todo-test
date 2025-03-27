import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { InputField } from './input-field';

describe('InputField component', () => {
  const mockOnSubmit = jest.fn();

  it('not submit when input empty', () => {
    render(<InputField placeholder="add new todo" textButton="Create todo" onSubmit={mockOnSubmit} />);

    const submitButton = screen.getByRole('button', { name: 'Create todo' });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('submit valid', () => {
    render(<InputField placeholder="add new todo" textButton="Create todo" onSubmit={mockOnSubmit} />);

    const inputField = screen.getByPlaceholderText('add new todo') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Create todo' });

    fireEvent.change(inputField, { target: { value: 'New Todo' } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith('New Todo');
    expect(inputField.value).toBe('');
  });

  it('button disabled = true', () => {
    render(<InputField placeholder="add new todo" textButton="Create todo" onSubmit={mockOnSubmit} />);

    const submitButton = screen.getByRole('button', { name: 'Create todo' });
    expect(submitButton).toBeDisabled();
  });

  it('button disabled = false', () => {
    render(<InputField placeholder="add new todo" textButton="Create todo" onSubmit={mockOnSubmit} />);

    const inputField = screen.getByPlaceholderText('add new todo');
    const submitButton = screen.getByRole('button', { name: 'Create todo' });

    fireEvent.change(inputField, { target: { value: 'New Todo' } });
    expect(submitButton).toBeEnabled();
  });
});
