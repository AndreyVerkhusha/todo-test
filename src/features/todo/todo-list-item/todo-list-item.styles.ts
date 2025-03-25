import styled, { css } from 'styled-components';

export const TodoItemContainer = styled.li`
  display: flex;
  border-bottom: 1px solid var(--bordersColor);
  align-items: center;
  padding: 8px 15px;

  &:last-child {
    border: none;
  }
`;

export const TodoItemLabel = styled.span<{ checked: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: var(--textColor);

  ${(props) =>
    props.checked &&
    css`
      text-decoration: line-through;
      opacity: 0.5;
    `}
`;
