import { createGlobalStyle } from "styled-components";
import { branco } from "./UI/variaveis";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}
body{
  background-color: ${branco};
}
html{
  overflow-x: hidden;
}
`;
