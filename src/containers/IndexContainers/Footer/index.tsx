import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Container, Content } from './styles';
import { Fade } from '~/components';

export default function Footer() {
  const intl = useIntl();
  return (
    <Container>
      <Content>
        <Fade>
          <h3>
            {intl.formatMessage({ id: 'footer.description' })}
            {/* Que bom que chegou até aqui! Espero poder te conhecer melhor! :) */}
          </h3>
          <small>
            {intl.formatMessage({ id: 'footer.copyright' })} © Italo Menezes{' '}
            {new Date().getFullYear()}
          </small>
        </Fade>
      </Content>
    </Container>
  );
}
