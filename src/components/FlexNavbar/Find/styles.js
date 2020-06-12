import styled from 'styled-components';

export const Input = styled.input`
  width: calc(100%);
  min-width: 15rem;
  border: 0;
  height: 30px;
  border-radius: 0.25rem;
  padding-left: 0.5rem;

  @media (min-width: 992px) {
    max-width: 50%;
  }

  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }
`;
