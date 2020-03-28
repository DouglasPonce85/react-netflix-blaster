import React from 'react';
import { Global, css, jsx } from '@emotion/core';

import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/footer';
import ContentRow from '../components/ContentRow';

/**
 * @function App
 */
const App = () => {
  return (
    <>
      <Global styles={GlobalCSS} />
      <Navbar />
      <Jumbotron />

      <ContentRow category={'Trending Now'} />
      <ContentRow category={'Drama'} />
      <ContentRow category={'Comedies'} />
      <Footer />
    </>
  );
}

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html,
  body,
  .app {
    margin: 0;
    min-height: 100%;
    width: 100%;
  }
  body {
    background: #151515;
  }
  a {
    text-decoration: none;
    color: white;
  }
  p {
    font-size: 20px;
  }
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  button {
    background-color: rgba(51, 51, 51, 0.8);
    border: 1px solid white;
    padding: 0.75em 2.3em;
    border-radius: 0.2vw;
    box-shadow: none;
    font-size: 1.1vw;
    color: white;
    margin-right: 15px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
  }
 .Icon {
    font-size: 18.5px;
  }
`

export default App;
