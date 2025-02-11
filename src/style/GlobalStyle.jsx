import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: "Roboto Flex", serif;
    outline: none;
    box-sizing: border-box;
}

html{
  height: auto;
}

body{
    margin: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.tertiary};
}

#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    flex: 1;
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;
}


/* Estilo para navegadores modernos */
::-webkit-scrollbar {
  width: 8px; 
  height: 8px; 
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 10px; 
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; /* Cor do polegar ao passar o mouse */
}

/* Para navegadores que suportam scrollbar com CSS */
.scrollbar {
  scrollbar-width: thin; /* Barra fina */
  scrollbar-color: #888 #f1f1f1; /* Cor do polegar e trilho */
}


`