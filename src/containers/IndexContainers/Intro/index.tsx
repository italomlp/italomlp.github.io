import React from 'react';
import TextLoop from 'react-text-loop';
// import { scroller } from 'react-scroll';

import { Button } from '~/components';

import { Container, Content, ButtonsContainer, IntroContainer } from './styles';
import useScrollTo from '~/helpers/hooks/useScrollTo';

export default function Intro() {
  const { scroll } = useScrollTo();

  return (
    <Container>
      <Content>
        <IntroContainer>
          <div>
            Sou desenvolvedor{' '}
            <TextLoop>
              <span>Mobile</span>
              <span>Frontend</span>
              <span>Backend</span>
              <span>Fullstack</span>
            </TextLoop>
          </div>
          <h1>Prazer, Italo Menezes!</h1>
        </IntroContainer>
        <ButtonsContainer>
          <Button typeColor="primary" onClick={() => scroll('resume')}>
            Sobre
          </Button>
          <Button typeColor="secondary" onClick={() => scroll('links')}>
            Contato
          </Button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
