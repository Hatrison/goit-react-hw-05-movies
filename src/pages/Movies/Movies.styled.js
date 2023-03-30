import { Form as FormFormik } from 'formik';
import { Link as LinkReact } from 'react-router-dom';
import styled from 'styled-components';

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid #a7a7a7;
  background-color: transparent;
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: #aaa;
  }
`;

export const Form = styled(FormFormik)`
  display: flex;
  align-items: stretch;
  margin: 20px 0;
`;

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
