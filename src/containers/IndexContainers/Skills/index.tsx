import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import {
  SkillLine,
  Container,
  Content,
  TextContainer,
  SkillContainer,
} from './styles';

import skills from '../../../../data/skills';
import { Fade } from '~/components';

export default function Skills() {
  const intl = useIntl();

  return (
    <Container>
      <Content>
        <TextContainer>
          <Fade>
            <h2>{intl.formatMessage({ id: 'sectionNames.skills' })}</h2>
            <p>{intl.formatMessage({ id: 'skills.description' })}</p>
          </Fade>
        </TextContainer>
        {skills.map((s, index) => (
          <SkillContainer key={index.toString()}>
            <Fade right>
              <strong>{s.name}</strong>
              <SkillLine percent={s.level} />
            </Fade>
          </SkillContainer>
        ))}
      </Content>
    </Container>
  );
}
