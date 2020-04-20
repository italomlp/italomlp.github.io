import React, { useCallback, useMemo } from 'react';
import ActivityTimeline from '@bit/nexxtway.react-rainbow.activity-timeline';
import TimelineMarker from '@bit/nexxtway.react-rainbow.timeline-marker';
import { useIntl } from 'gatsby-plugin-intl';
import { compareDesc, addYears, addMonths, addWeeks } from 'date-fns';

import jobs from '../../../../data/jobs';

import { Container, Content, TextContainer } from './styles';
import { Fade } from '~/components';

export default function Experience() {
  const intl = useIntl();

  const getFinalDate = useCallback(
    (job: {
      begin: { month: number; year: number };
      duration: { qtt: number; unity: string };
    }) => {
      const final = new Date();
      final.setMonth(job.begin.month - 1);
      final.setFullYear(job.begin.year);
      if (job.duration.unity === 'year') {
        return addYears(final, job.duration.qtt);
      }
      if (job.duration.unity === 'month') {
        return addMonths(final, job.duration.qtt);
      }
      if (job.duration.unity === 'week') {
        return addWeeks(final, job.duration.qtt);
      }
      return null;
    },
    []
  );

  const sortJobs = useMemo(() => {
    const sortedJobs = [...jobs];
    sortedJobs.sort((a, b) => {
      if (!a.duration && b.duration) {
        return -1;
      }
      if (a.duration && !b.duration) {
        return 1;
      }

      if (a.duration && b.duration) {
        const finalA = getFinalDate(a);
        const finalB = getFinalDate(b);

        if (finalA && finalB) {
          return compareDesc(finalA, finalB);
        }
        return 0;
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
          {sortJobs.map((j, index) => (
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
