import React from 'react';
import Fade from 'react-reveal/Fade';

import {
  SkillLine,
  Container,
  Content,
  TextContainer,
  SkillContainer,
} from './styles';

import skills from '../../../../data/skills';

export default function Skills() {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Fade>
            <h2>Skills</h2>
            <p>
              Essas são as tecnologias que mais uso e gosto, além de minhas
              principais habilidades.
            </p>
          </Fade>
        </TextContainer>
        <Fade right>
          {skills.map((s, index) => (
            <SkillContainer key={index.toString()}>
              <strong>{s.name}</strong>
              <SkillLine percent={s.level} />
            </SkillContainer>
          ))}
        </Fade>
      </Content>
    </Container>
  );
}
