import React from 'react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import { Layout, Seo } from '~/components';

import { Container, BackgroundSkew, Content, TextContainer } from './styles';

export default function NotFound() {
  const intl = useIntl();

  return (
    <Layout>
      <Seo lang={intl.locale} title={intl.formatMessage({ id: '404.title' })} />
      <Container>
        <BackgroundSkew />
        <Content>
          <TextContainer>
            <h1>404 - {intl.formatMessage({ id: '404.notFound' })}</h1>
            <Link to={intl.locale === 'pt' ? '/' : '/en'}>
              {intl.formatMessage({ id: 'general.home' })}
            </Link>
          </TextContainer>
        </Content>
      </Container>
    </Layout>
  );
}
