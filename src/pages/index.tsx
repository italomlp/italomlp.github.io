import React, { useState, useCallback, useRef } from 'react';
import { push as Menu } from 'react-burger-menu';
import { useIntl } from 'gatsby-plugin-intl';

import {
  FaBars,
  FaRegUserCircle,
  FaList,
  FaCalendarAlt,
  FaRegAddressCard,
  FaLanguage,
} from 'react-icons/fa';

import Scrollbars, { Scrollbar } from 'react-scrollbars-custom';
import { useKey } from 'react-use';

import { Layout, FullFill, Seo, Fade } from '~/components';
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
  LangsContent,
  LangsLabel,
} from './styles';

export default function Home() {
  const intl = useIntl();
  const { scroll } = useScrollTo();
  const scrollRef = useRef<Scrollbar>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useCallback((id: string) => {
    scroll(id);
    setMenuOpen(false);
  }, []);
  useKey('End', () => {
    if (scrollRef && scrollRef.current && scrollRef.current.scrollerElement) {
      scrollRef.current.scrollerElement.scrollTo({
        behavior: 'smooth',
        top: scrollRef.current.scrollHeight,
      });
    }
  });
  useKey('Home', () => {
    if (scrollRef && scrollRef.current && scrollRef.current.scrollerElement) {
      scrollRef.current.scrollerElement.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
  });
  useKey('ArrowUp', () => {
    if (scrollRef && scrollRef.current && scrollRef.current.scrollerElement) {
      scrollRef.current.scrollerElement.scrollTo({
        behavior: 'smooth',
        top: scrollRef.current.scrollTop - 100,
      });
    }
  });
  useKey('ArrowDown', () => {
    if (scrollRef && scrollRef.current && scrollRef.current.scrollerElement) {
      scrollRef.current.scrollerElement.scrollTo({
        behavior: 'smooth',
        top: scrollRef.current.scrollTop + 100,
      });
    }
  });
  useKey('PageUp', () => {
    if (scrollRef && scrollRef.current && scrollRef.current.scrollerElement) {
      scrollRef.current.scrollerElement.scrollTo({
        behavior: 'smooth',
        top: scrollRef.current.scrollTop - window.innerHeight,
      });
    }
  });
  useKey('PageDown', () => {
    if (scrollRef && scrollRef.current && scrollRef.current.scrollerElement) {
      scrollRef.current.scrollerElement.scrollTo({
        behavior: 'smooth',
        top: scrollRef.current.scrollTop + window.innerHeight,
      });
    }
  });

  return (
    <Layout>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({ id: 'home.title' })}
        description={intl.formatMessage({ id: 'home.description' })}
        keywords={[
          'italomlp',
          'italo',
          'menezes',
          'italo menezes',
          'italo menezes de lima poroca',
          'react',
          'reactjs',
          'desenvolvedor',
          'developer',
          'mobile',
          'frontend',
          'fullstack',
          'react native',
          'nodejs',
        ]}
      />
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
            <LangsLabel>
              <FaLanguage />
              <span>{intl.formatMessage({ id: 'general.language' })}:</span>
            </LangsLabel>
            <LangsContent>
              <LangButton to="/">PT</LangButton>
              <LangButton to="/en">EN</LangButton>
            </LangsContent>
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
        <Scrollbars
          ref={scrollRef}
          removeTracksWhenNotUsed
          disableTracksMousewheelScrolling
          disableTracksWidthCompensation
          minimalThumbSize={15}
          scrollbarWidth={15}
          noScrollX
          id="page-wrap"
        >
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
              <FullFill scrollName="skills" skew bgColor="otherDark">
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
        </Scrollbars>
      </div>
    </Layout>
  );
}
