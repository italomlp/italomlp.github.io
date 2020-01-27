import React from 'react';
import TextLoop from 'react-text-loop';
// import { scroller } from 'react-scroll';
import { useIntl } from 'gatsby-plugin-intl';

import { Button } from '~/components';

import { Container, Content, ButtonsContainer, IntroContainer } from './styles';
import useScrollTo from '~/helpers/hooks/useScrollTo';

export default function Intro() {
  const { scroll } = useScrollTo();
  const intl = useIntl();

  return (
    <Container>
      <Content>
        <IntroContainer>
          <div>
            {intl.formatMessage(
              { id: 'intro.iAmDev' },
              {
                devType: (
                  <TextLoop>
                    <span>Mobile</span>
                    <span>Frontend</span>
                    <span>Backend</span>
                    <span>Fullstack</span>
                  </TextLoop>
                ),
              }
            )}
          </div>
          <h1>
            {intl.formatMessage({ id: 'intro.niceToMeet' })}
            Italo Menezes!
          </h1>
        </IntroContainer>
        <ButtonsContainer>
          <Button typeColor="primary" onClick={() => scroll('about')}>
            {intl.formatMessage({ id: 'sectionNames.about' })}
          </Button>
          <Button typeColor="secondary" onClick={() => scroll('contact')}>
            {intl.formatMessage({ id: 'sectionNames.contact' })}
          </Button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
