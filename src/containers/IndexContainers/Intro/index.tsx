import React from 'react';
import TextLoop from 'react-text-loop';
import { Container, Content, ButtonsContainer, IntroContainer } from './styles';
import { Button } from '~/components';

export default function Intro() {
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
          <Button typeColor="primary">Sobre</Button>
          <Button typeColor="secondary">Contato</Button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
