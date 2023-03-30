import { Link as LinkReact } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Link = styled(LinkReact)`
  color: black;

  :visited {
    color: black;
  }
`;
