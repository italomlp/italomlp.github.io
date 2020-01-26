import React from 'react';
import { push as Menu } from 'react-burger-menu';
import Fade from 'react-reveal/Fade';

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
          <Fade>
            <div style={{ width: '100%', height: '100%' }}>
              <FullFill
                scrollName="top"
                bgColor="primary"
                customInnerPadding={0}
              >
                <Intro />
              </FullFill>
              <FullFill scrollName="resume" skew bgColor="other">
                <Resume />
              </FullFill>
              <FullFill
                scrollName="skills"
                skew
                bgColor="otherDark"
                textColorInverse
              >
                <Skills />
              </FullFill>
              <FullFill
                scrollName="experience"
                bgColor="secondaryDark"
                textColorInverse
                skew
                skewInverse
              >
                <Experience />
              </FullFill>
              <FullFill
                scrollName="links"
                skew
                bgColor="other"
                fullFill={false}
              >
                <Links />
              </FullFill>
              {/* <FullFill skew skewInverse>
                Contact
              </FullFill> */}
            </div>
          </Fade>
        </div>
      </div>
    </Layout>
  );
}
