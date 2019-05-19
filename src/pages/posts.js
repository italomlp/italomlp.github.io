import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-awesome-styled-grid';

import siteConfig from '../../data/siteConfig';

import Layout from '../components/layout';
import Hero from '../components/hero';
import SEO from '../components/SEO';
import Wrapper from '../components/wrapper';
import Posts from '../components/posts';

class PostsPage extends React.Component {
  render() {
    const title = 'Posts';
    return (
      <Layout location={this.props.location}>
        <SEO
          title={title}
          keywords={[
            'react',
            'curriculum',
            'italomlp',
            'italomenezes',
            'italo menezes',
            'italo menezes de lima',
            'italo menezes de lima poroca',
            'posts italo menezes',
            'posts italomlp',
            'devto italomlp',
            'dev italomlp',
          ]}
        />
        {/* <p>oi</p> */}

        <Hero heroImg={siteConfig.siteCover} title={title} />

        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Posts />
          </Container>
        </Wrapper>
      </Layout>
    );
  }
}

export default styled(PostsPage)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
`;
