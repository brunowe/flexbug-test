import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: block;
  padding: 0.5rem 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;

  &:focus,
  :hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
  }

  &:active {
    color: #fff;
  }
`;
