import { render, screen } from '@testing-library/react';

import { App } from './app';

jest.mock('@/features/todo/todo', () => ({
  Todo: () => <div>Todo Component</div>,
}));

jest.mock('@/features/todo/todo-input-manager', () => ({
  TodoInputManager: () => <div>Todo Input Manager Component</div>,
}));

jest.mock('@/shared/ui/section-title', () => ({
  SectionTitle: () => <h1>Section Title</h1>,
}));

describe('App component', () => {
  it('render Section Title, Todo, TodoInputManager components', () => {
    render(<App />);

    expect(screen.getByText('Section Title')).toBeInTheDocument();
    expect(screen.getByText('Todo Input Manager Component')).toBeInTheDocument();
    expect(screen.getByText('Todo Component')).toBeInTheDocument();
  });
});
