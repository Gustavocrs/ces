// import "./button.css";
import styled from "styled-components";

export const Button = styled.button`
  padding: 8px;
  margin: 0 5px;
  width: 110px;
  border-radius: 4px;
  border: none;
  background-color: var(--azulescuro);
  color: var(--branco);
  font-family: "Roboto";
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background-color: var(--azulclaro);
    transition: 500ms;
  }
`;

export default (props) => {
  return (
    <Button onClick={props.onClick} id={props.id}>
      {props.text}
    </Button>
  );
};
