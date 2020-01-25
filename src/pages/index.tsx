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
        <div id="page-wrap">
          <div style={{ width: '100%', height: '100%' }}>
            <FullFill scrollName="top" bgColor="primary" customInnerPadding={0}>
              <Intro />
            </FullFill>
            <FullFill scrollName="resume" skew bgColor="otherLight">
              <Resume />
            </FullFill>
            <FullFill scrollName="skills" skew bgColor="other">
              <Skills />
            </FullFill>
            <FullFill scrollName="experience" skew skewInverse>
              <Experience />
            </FullFill>
            <FullFill scrollName="links" skew bgColor="other">
              <Links />
            </FullFill>
            {/* <FullFill skew skewInverse>
              Contact
            </FullFill> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
