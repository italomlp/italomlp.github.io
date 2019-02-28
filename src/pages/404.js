import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Wrapper from '../components/wrapper';
import SEO from '../components/SEO';

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`;

const Icon = styled.div`
  width: 150px;
  margin: 0 auto;
`;

const Text = styled.p`
  text-align: center;
`;

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} noCover={true}>
        <SEO title="Página não encontrada" />
        <Hero heroImg="/images/404.jpeg" title="404" />
        <Wrapper>
          <MainTitle>404 Página não encontrada</MainTitle>
          <Icon>
            <img src="/images/ufo-and-cow.svg" alt="ufo and cow" />
          </Icon>
          <Text>
            Parece que você entrou em um link quebrado ou digitou uma URL que
            não existe neste site.
          </Text>
        </Wrapper>
      </Layout>
    );
  }
}

export default NotFoundPage;
