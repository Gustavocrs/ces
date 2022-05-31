import styled from "styled-components";

import {
  branco,
  azulescuro,
  azulclaro,
} from "./UI/variaveis";

import { GrStackOverflow } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: ${azulescuro};
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
  margin: 0 15px;
`;

export const Li = styled.li`
  width: 110px;
  list-style: none;
  color: ${branco};
  text-align: center;
  margin: 0 5px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: "Roboto";
  font-weight: 400;
  text-decoration: none;
  &:hover {
    background-color: ${azulclaro};
    transition: 500ms;
  }
`;

const LinkLogin = styled(Link)`
  color: ${branco};
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconLogo = styled(GrStackOverflow)`
  font-size: 4rem;
  color: ${azulclaro};
  display: flex;
`;

const TituloPrincipal = styled.h1`
  color: ${branco};
  margin: 0 15px;
`;

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <IconLogo />
        <TituloPrincipal>
          CES - Controle de Equipamentos e Serviços
        </TituloPrincipal>
      </Container>
      <Ul>
        <Li>
          <LinkLogin to="/home">Home</LinkLogin>
        </Li>
        <Li>
          <LinkLogin to="/incluir">Incluir</LinkLogin>
        </Li>
        <Li>
          <LinkLogin to="/login">Sair</LinkLogin>
        </Li>
      </Ul>
    </Nav>
  );
}
