import { createGlobalStyle } from 'styled-components';
import 'hover.css/css/hover-min.css';
import 'rc-progress/assets/index.css';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 64px;
    height: 60px;
    right: 10px;
    top: 20px;
    background-color: ${colors.primaryDark};
    color: ${colors.other};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 5px #0007;

    > svg {
      width: 30px !important;
      height: 30px !important;
    }
    
    &.hvr-sweep-to-left{
      &:before {
        background: ${colors.other};
      }
      &:hover {
        color: ${colors.primaryDark};
      }
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${colors.other};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${colors.primary};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: ${colors.primary};
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  #outer-container,
  #outer-container #page-wrap {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
  }

`;
