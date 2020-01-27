import React, { useState, useCallback } from 'react';
import { push as Menu } from 'react-burger-menu';
import Fade from 'react-reveal/Fade';
import { useIntl } from 'gatsby-plugin-intl';

import {
  FaBars,
  FaRegUserCircle,
  FaList,
  FaCalendarAlt,
  FaRegAddressCard,
} from 'react-icons/fa';

import { Layout, FullFill } from '~/components';
import {
  Intro,
  About,
  Skills,
  Experience,
  Contact,
  Footer,
} from '~/containers/IndexContainers';
import useScrollTo from '~/helpers/hooks/useScrollTo';

import {
  MenuItem,
  MenuItemContent,
  LangsContainer,
  LangButton,
} from './styles';

export default function Home() {
  const intl = useIntl();
  const { scroll } = useScrollTo();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useCallback((id: string) => {
    scroll(id);
    setMenuOpen(false);
  }, []);

  return (
    <Layout>
      <div id="outer-container">
        <Menu
          right
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          customBurgerIcon={<FaBars />}
          burgerButtonClassName="hvr-sweep-to-left"
          isOpen={menuOpen}
          onStateChange={state => setMenuOpen(state.isOpen)}
        >
          <LangsContainer>
            <LangButton to="/">PT</LangButton>
            <LangButton to="/en">EN</LangButton>
          </LangsContainer>

          <MenuItem onClick={() => scrollTo('about')}>
            <MenuItemContent>
              <span>{intl.formatMessage({ id: 'sectionNames.about' })}</span>
              <FaRegUserCircle />
            </MenuItemContent>
          </MenuItem>
          <MenuItem onClick={() => scrollTo('skills')}>
            <MenuItemContent>
              <span>{intl.formatMessage({ id: 'sectionNames.skills' })}</span>
              <FaList />
            </MenuItemContent>
          </MenuItem>
          <MenuItem onClick={() => scrollTo('experience')}>
            <MenuItemContent>
              <span>
                {intl.formatMessage({ id: 'sectionNames.experience' })}
              </span>
              <FaCalendarAlt />
            </MenuItemContent>
          </MenuItem>
          <MenuItem onClick={() => scrollTo('contact')}>
            <MenuItemContent>
              <span>{intl.formatMessage({ id: 'sectionNames.contact' })}</span>
              <FaRegAddressCard />
            </MenuItemContent>
          </MenuItem>
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
              <FullFill scrollName="about" skew bgColor="other">
                <About />
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
                scrollName="contact"
                skew
                bgColor="other"
                fullFill={false}
              >
                <Contact />
              </FullFill>
              <FullFill
                scrollName="footer"
                skew
                skewInverse
                bgColor="primary"
                textColorInverse
                fullFill={false}
              >
                <Footer />
              </FullFill>
            </div>
          </Fade>
        </div>
      </div>
    </Layout>
  );
}
