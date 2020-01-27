import React from 'react';
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

import { MenuItem, MenuItemContent } from './styles';
import { Layout, FullFill } from '~/components';
import {
  Intro,
  Resume,
  Skills,
  Experience,
  Links,
  Footer,
} from '~/containers/IndexContainers';

export default function Home() {
  const intl = useIntl();

  return (
    <Layout>
      <div id="outer-container">
        <Menu
          right
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          customBurgerIcon={<FaBars />}
          burgerButtonClassName="hvr-sweep-to-left"
        >
          <MenuItem href="/">
            <MenuItemContent>
              <span>{intl.formatMessage({ id: 'sectionNames.about' })}</span>
              <FaRegUserCircle />
            </MenuItemContent>
          </MenuItem>
          <MenuItem href="/">
            <MenuItemContent>
              <span>{intl.formatMessage({ id: 'sectionNames.skills' })}</span>
              <FaList />
            </MenuItemContent>
          </MenuItem>
          <MenuItem href="/">
            <MenuItemContent>
              <span>
                {intl.formatMessage({ id: 'sectionNames.experience' })}
              </span>
              <FaCalendarAlt />
            </MenuItemContent>
          </MenuItem>
          <MenuItem href="/">
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
