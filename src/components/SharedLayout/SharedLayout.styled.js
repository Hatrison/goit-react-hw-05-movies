import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderThumb = styled.header`
  position: relative;
  padding-bottom: 60px;
`;

export const HeaderLine = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  border-bottom: 1px solid #a7a7a7;
  box-shadow: 0 3px 10px #a7a7a7;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;

  &.active {
    color: red;
  }
`;
