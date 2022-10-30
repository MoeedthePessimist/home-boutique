import styled from "styled-components";
import { ButtonProps } from "../../../types/ButtonProps";

export const FilledBtn = styled.button`
  background-color: #ffc107;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: 2rem;
  cursor: pointer;
  border: 3px solid #ffc107;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const OutlinedBtn = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: 2rem;
  cursor: pointer;
  border: 3px solid #ffc107;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const FilledButton = (props: ButtonProps) => {
  return <FilledBtn>{props.children}</FilledBtn>;
};

export const OutlinedButton = (props: ButtonProps) => {
  return <OutlinedBtn>{props.children}</OutlinedBtn>;
};
