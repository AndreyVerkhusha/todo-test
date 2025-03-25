import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 8px;

  & > div {
    width: 100%;
  }

  input {
    padding: 8px 14px;
  }

  button {
    white-space: nowrap;
  }
`;
