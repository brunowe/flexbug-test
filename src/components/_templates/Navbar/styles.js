import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 0rem 0.25rem;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 300px) {
    min-width: 270px;
  }
`;
