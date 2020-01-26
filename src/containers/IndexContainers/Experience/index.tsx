import React from 'react';
import ActivityTimeline from '@bit/nexxtway.react-rainbow.activity-timeline';
import TimelineMarker from '@bit/nexxtway.react-rainbow.timeline-marker';

import jobs from '../../../../data/jobs';

import { Container, Content } from './styles';

export default function Experience() {
  return (
    <Container>
      <Content>
        <h2>Experiência</h2>
        <ActivityTimeline>
          {jobs.map((j, index) => (
            <TimelineMarker
              key={index.toString()}
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
          ))}
        </ActivityTimeline>
      </Content>
    </Container>
  );
}
