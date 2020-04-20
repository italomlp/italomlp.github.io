import React from 'react';
import * as AllIcons from 'react-icons/fa';
import { useIntl } from 'gatsby-plugin-intl';

import {
  Container,
  Content,
  TextContainer,
  LinksContainer,
  LinkContent,
} from './styles';
import { socialLinks } from '../../../../data/config';
import { Fade } from '~/components';

const getCorrectIcon = (name: string) => {
  return AllIcons[name as keyof typeof AllIcons];
};

export default function Links() {
  const intl = useIntl();
  return (
    <Container>
      <Content>
        <Fade>
          <TextContainer>
            <h2>{intl.formatMessage({ id: 'sectionNames.contact' })}</h2>
            <p>{intl.formatMessage({ id: 'contact.description' })}</p>
          </TextContainer>
        </Fade>
        <Fade top>
          <LinksContainer>
            {socialLinks.map(l => {
              const Icon = getCorrectIcon(l.name);
              return (
                <LinkContent key={l.url}>
                  <a href={l.url} target="blank">
                    <Icon size={30} />
                    <strong>{l.title}</strong>
                  </a>
                </LinkContent>
              );
            })}
          </LinksContainer>
        </Fade>
      </Content>
    </Container>
  );
}
