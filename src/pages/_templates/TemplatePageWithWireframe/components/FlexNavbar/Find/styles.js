import styled from 'styled-components';

export const Input = styled.input`
  width: calc(100%);
  min-width: 15rem;
  border: 0;
  height: 30px;
  border-radius: 2px;

  @media (min-width: 992px) {
    max-width: 50%;
  }
`;
