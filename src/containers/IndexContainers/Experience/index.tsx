import React, { useCallback } from 'react';
import ActivityTimeline from '@bit/nexxtway.react-rainbow.activity-timeline';
import TimelineMarker from '@bit/nexxtway.react-rainbow.timeline-marker';
import Fade from 'react-reveal/Fade';
import { useIntl } from 'gatsby-plugin-intl';

import jobs from '../../../../data/jobs';

import { Container, Content, TextContainer } from './styles';

export default function Experience() {
  const intl = useIntl();

  const sortJobs = useCallback(() => {
    const sortedJobs = [...jobs];
    sortedJobs.sort((a, b) => {
      if (a.begin.year < b.begin.year) {
        return -1;
      }
      if (a.begin.year === b.begin.year && a.begin.month < b.begin.month) {
        return -1;
      }
      if (a.begin.year === b.begin.year && a.begin.month === b.begin.month) {
        return 0;
      }
      return 1;
    });
    sortedJobs.sort((a, b) => {
      if (!a.duration && b.duration) {
        return 1;
      }
      if (a.duration && !b.duration) {
        return -1;
      }
      return 0;
    });
    return sortedJobs;
  }, [jobs]);

  return (
    <Container>
      <Content>
        <Fade top>
          <TextContainer>
            <h2>{intl.formatMessage({ id: 'sectionNames.experience' })}</h2>
            <p>{intl.formatMessage({ id: 'experience.description' })}</p>
          </TextContainer>
        </Fade>
        <ActivityTimeline>
          {sortJobs().map((j, index) => (
            <Fade bottom key={index.toString()}>
              <TimelineMarker
                label={j.company}
                datetime={`${intl.formatDate(
                  new Date(j.begin.year, j.begin.month - 1),
                  {
                    year: 'numeric',
                    month: 'long',
                  }
                )} - ${
                  j.duration
                    ? `${j.duration.qtt} ${intl.formatMessage({
                        id: `general.${
                          j.duration.qtt > 1
                            ? `${j.duration.unity}s`
                            : j.duration.unity
                        }`,
                      })}`
                    : intl.formatMessage({ id: `general.actual` })
                }`}
                description={intl.formatMessage(
                  {
                    id: `experience.jobs.${j.intlName}.description`,
                  },
                  { b: str => <b>{str}</b> }
                )}
              >
                {j.links &&
                  j.links.map((l, i) => (
                    <a
                      key={`${index.toString()}/links/${i.toString()}`}
                      href={l.url}
                      target="blank"
                    >
                      {intl.formatMessage({
                        id: `${l.title}`,
                      })}
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
