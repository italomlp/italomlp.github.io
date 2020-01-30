import React, { useCallback } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Container, Avatar, Content, TextContainer } from './styles';
import { Fade } from '~/components';

export default function Resume() {
  const intl = useIntl();

  const getMyAge = useCallback(() => {
    const now = new Date();
    const age = now.getFullYear() - 1997;
    if ((now.getMonth() === 9 && now.getDate() >= 9) || now.getMonth() > 9) {
      return age;
    }
    return age - 1;
  }, []);

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
            <Avatar src="assets/profile.jpg" alt="Profile" />
          </div>
        </Fade>
        <TextContainer>
          <Fade right>
            <h2>{intl.formatMessage({ id: 'about.completeTitle' })}</h2>
            <p>
              {intl.formatMessage(
                { id: 'about.description' },
                { age: getMyAge() }
              )}
            </p>
          </Fade>
        </TextContainer>
      </Content>
    </Container>
  );
}
