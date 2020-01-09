import React from 'react';
import { push as Menu } from 'react-burger-menu';

// import { Container } from './styles';
import './index.css';
import GlobalStyles from '~/styles/global';

export default function Home() {
  return (
    <div id="outer-container">
      <GlobalStyles />
      <Menu right pageWrapId="page-wrap" outerContainerId="outer-container">
        <a href="/">Home</a>
        <a href="/">Sobre</a>
      </Menu>
      <main id="page-wrap">Hello world</main>
    </div>
  );
}
