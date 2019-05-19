import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaDev,
} from 'react-icons/fa';
import siteConfig from '../../data/siteConfig';

import Layout from '../components/layout';
import Hero from '../components/hero';
import SEO from '../components/SEO';
import Wrapper from '../components/wrapper';
import About from '../components/about';
import Skills from '../components/skills';
import Timeline from '../components/timeline';
import Repositories from '../components/repositories';

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`;

class Home extends React.Component {
  render() {
    const title = 'Oi! Eu sou Italo!';
    return (
      <Layout location={this.props.location}>
        <SEO
          title={title}
          keywords={[
            'gatsbyjs',
            'react',
            'curriculum',
            'italomlp',
            'italomenezes',
            'italo menezes',
            'italo menezes de lima',
            'italo menezes de lima poroca',
          ]}
        />

        <Hero heroImg={siteConfig.siteCover} title={title} />

        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className="avatar">
                <img
                  className="avatar__image"
                  src="/images/avatar.jpg"
                  alt="user avatar"
                />
                <div className="social">
                  {siteConfig.social.github && (
                    <a
                      className="social-link github"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={siteConfig.social.github}
                    >
                      <FaGithub className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.devTo && (
                    <a
                      className="social-link devTo"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={siteConfig.social.devTo}
                    >
                      <FaDev className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a
                      className="social-link linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={siteConfig.social.linkedin}
                    >
                      <FaLinkedin className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.twitter && (
                    <a
                      className="social-link twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={siteConfig.social.twitter}
                    >
                      <FaTwitter className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.email && (
                    <a
                      className="social-link email"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`mailto:${siteConfig.social.email}`}
                    >
                      <FaEnvelope className="social-icon" size="32" />
                    </a>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4}>
                <About title="Sobre" text={siteConfig.authorDescription} />
              </Col>
              <Col xs={4} sm={4}>
                <Skills title="Skills" skills={siteConfig.skills} />
              </Col>
            </Row>
            <Separator />
            <Timeline />
            <Separator />
            <Repositories />
          </Container>
        </Wrapper>
      </Layout>
    );
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.devTo:hover {
    color: #000000;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`;
