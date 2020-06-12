import styled from 'styled-components';

export const Container = styled.div`
  margin-right: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
  background-color: #f8f9fa !important;
  border-left: 1px solid #dee2e6 !important;
  flex: 0 0 15rem;

  max-height: 100%;
  overflow-y: auto;

  @media (min-width: 1280px) {
    margin-right: 0;
  }
`;


