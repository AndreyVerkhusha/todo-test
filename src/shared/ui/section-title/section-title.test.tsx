import { render, screen } from '@testing-library/react';

import { SectionTitle } from './section-title';

it('renders the title', () => {
  const titleText = 'Test section title';

  render(<SectionTitle title={titleText} />);

  const titleElement = screen.getByText(titleText);
  expect(titleElement).toBeInTheDocument();
});
