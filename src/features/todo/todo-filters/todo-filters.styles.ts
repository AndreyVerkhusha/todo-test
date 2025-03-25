import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  width: 100%;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--backgroundWrapperColor);
  border-top: 1px solid var(--bordersColor);
  border-radius: 0 0 8px 8px;
`;

export const TodoLeft = styled.div`
  width: fit-content;
`;

export const FilterOptions = styled.div`
  display: flex;
  align-items: center;
`;
