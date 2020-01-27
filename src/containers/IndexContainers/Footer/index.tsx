import React from 'react';

import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <h3>
          Que bom que chegou até aqui! Espero poder te conhecer melhor! :)
        </h3>
        <small>
          Todos os direitos reservados © Italo Menezes{' '}
          {new Date().getFullYear()}
        </small>
      </Content>
    </Container>
  );
}
