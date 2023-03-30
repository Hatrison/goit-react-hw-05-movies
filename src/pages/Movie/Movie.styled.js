import { Link as LinkReact } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(LinkReact)`
  display: flex;
  align-items: center;

  gap: 5px;
  width: fit-content;
  padding: 10px;
  color: black;
  text-decoration: none;

  :visited {
    color: black;
  }

  :hover {
    text-decoration: underline;
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid #a7a7a7;
`;

export const Image = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AdditionalContent = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #a7a7a7;
`;
