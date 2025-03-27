import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('renders correctly and handles change event', () => {
    const mockChange = jest.fn();

    const { rerender } = render(<Checkbox onChange={mockChange} checked={false} />);

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).not.toBeChecked();

    fireEvent.click(checkboxElement);

    expect(mockChange).toHaveBeenCalledTimes(1);

    rerender(<Checkbox onChange={mockChange} checked={true} />);

    expect(checkboxElement).toBeChecked();
  });
});
