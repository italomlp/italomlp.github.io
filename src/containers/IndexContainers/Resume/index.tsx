import React from 'react';
import Fade from 'react-reveal/Fade';
import { useIntl } from 'gatsby-plugin-intl';

import { Container, Avatar, Content, TextContainer } from './styles';

export default function Resume() {
  const intl = useIntl();

  return (
    <Container>
      <Content>
        <Fade left>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar src="assets/profile.jpeg" alt="Profile" />
          </div>
        </Fade>
        <TextContainer>
          <Fade right>
            <h2>{intl.formatMessage({ id: 'about.completeTitle' })}</h2>
            <p>
              {intl.formatMessage({ id: 'about.description' })}
            </p>
          </Fade>
        </TextContainer>
      </Content>
    </Container>
  );
}
