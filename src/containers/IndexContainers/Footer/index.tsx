import React from 'react';
import Fade from 'react-reveal/Fade';

import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <Fade>
          <h3>
            Que bom que chegou até aqui! Espero poder te conhecer melhor! :)
          </h3>
          <small>
            Todos os direitos reservados © Italo Menezes{' '}
            {new Date().getFullYear()}
          </small>
        </Fade>
      </Content>
    </Container>
  );
}
