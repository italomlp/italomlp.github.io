import React from 'react';
import { push as Menu } from 'react-burger-menu';

import { FiMenu } from 'react-icons/fi';

// import { Container } from './styles';
import { Layout, FullFill } from '~/components';
import {
  Intro,
  Resume,
  Skills,
  Experience,
  Links,
} from '~/containers/IndexContainers';

export default function Home() {
  return (
    <Layout>
      <div id="outer-container">
        <Menu
          right
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          customBurgerIcon={<FiMenu />}
          burgerButtonClassName="hvr-sweep-to-left"
        >
          <a href="/">Home</a>
          <a href="/">Sobre</a>
        </Menu>
        <main id="page-wrap">
          <FullFill bgColor="primary" customInnerPadding={0}>
            <Intro />
          </FullFill>
          <FullFill skew>
            <Resume />
          </FullFill>
          <FullFill skew bgColor="secondary">
            <Skills />
          </FullFill>
          <FullFill skew skewInverse>
            <Experience />
          </FullFill>
          <FullFill skew bgColor="other">
            <Links />
          </FullFill>
          {/* <FullFill skew skewInverse>
            Contact
          </FullFill> */}
        </main>
      </div>
    </Layout>
  );
}
