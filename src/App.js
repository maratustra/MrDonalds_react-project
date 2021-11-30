/* eslint-disable babel/object-curly-spacing */
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/NavBar';


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  
  body {
	  margin: 0;
    background-color: #f0f0f0;
	  color: black;
    font-family: Roboto, sans-serif;
    font-size: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-family: Pacifico;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
}

export default App;
