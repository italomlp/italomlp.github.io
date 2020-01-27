import React from 'react';
import ActivityTimeline from '@bit/nexxtway.react-rainbow.activity-timeline';
import TimelineMarker from '@bit/nexxtway.react-rainbow.timeline-marker';
import Fade from 'react-reveal/Fade';

import jobs from '../../../../data/jobs';

import { Container, Content, TextContainer } from './styles';

export default function Experience() {
  return (
    <Container>
      <Content>
        <Fade top>
          <TextContainer>
            <h2>Experiência</h2>
            <p>
              Aqui estão a maioria dos projetos em que trabalhei ou trabalho
              atualmente. Também estão listados alguns posts ou materiais
              relacionados à programação feitos por mim.
            </p>
          </TextContainer>
        </Fade>
        <ActivityTimeline>
          {jobs.map((j, index) => (
            <Fade bottom key={index.toString()}>
              <TimelineMarker
                label={j.company}
                datetime={`${j.begin.month}/${j.begin.year} - ${
                  j.duration ? j.duration : 'atual'
                }`}
                description={j.description}
              >
                {j.links &&
                  j.links.map((l, i) => (
                    <a
                      key={`${index.toString()}/links/${i.toString()}`}
                      href={l.url}
                      target="blank"
                    >
                      {l.title}
                    </a>
                  ))}
              </TimelineMarker>
            </Fade>
          ))}
        </ActivityTimeline>
      </Content>
    </Container>
  );
}
