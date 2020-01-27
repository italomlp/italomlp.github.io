import React from 'react';
import * as AllIcons from 'react-icons/fa';

import {
  Container,
  Content,
  TextContainer,
  LinksContainer,
  Link,
} from './styles';
import { socialLinks } from '../../../../data/config';

const getCorrectIcon = (name: string) => {
  return AllIcons[name as keyof typeof AllIcons];
};

export default function Links() {
  return (
    <Container>
      <Content>
        <TextContainer>
          <h2>Contatos</h2>
          <p>
            Quer trocar uma ideia? Entre em contato comigo através das redes
            sociais ou email.
          </p>
        </TextContainer>
        <LinksContainer>
          {socialLinks.map(l => {
            const Icon = getCorrectIcon(l.name);
            return (
              <Link>
                <a href={l.url} target="blank">
                  <Icon size={30} />
                </a>
                <strong>{l.title}</strong>
              </Link>
            );
          })}
        </LinksContainer>
      </Content>
    </Container>
  );
}
