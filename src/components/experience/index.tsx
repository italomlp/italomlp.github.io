import { TypedObject } from '@portabletext/types';

import { ExternalLink } from '@/components/external-link';
import { ShowExternalIcon } from '@/components/external-link/types';
import { PortableAdapter } from '@/components/portable-adapter';
import { SectionContainer } from '@/components/section-container';
import { Separator, Typography } from '@/components/ui';
import { timeDifference, toFormattedMonthAndYear } from '@/helpers/date';
import { getScopedI18n } from '@/locales/server';

type Props = {
  experiences: {
    _key: string;
    role: string;
    company: string;
    companyLink: string;
    description: TypedObject[];
    isCurrent: boolean;
    period: {
      startAt: string;
      endAt?: string;
    };
  }[];
};

export async function Experience({ experiences }: Props) {
  const experienceScopedT = await getScopedI18n('experience');

  function getFormattedDate(period: Props['experiences'][number]['period']) {
    const start = toFormattedMonthAndYear(period.startAt);
    const diff = timeDifference(period.startAt, period.endAt || new Date());

    if (period.endAt) {
      return `${start} - ${toFormattedMonthAndYear(period.endAt)} (${diff})`;
    }
    return `${start} - ${experienceScopedT('tillToday')} (${diff})`;
  }

  return (
    <SectionContainer>
      <Typography variant="h1" className="mt-8">
        {experienceScopedT('title')}
      </Typography>

      <Typography variant="blockquote" className="opacity-75">
        {experienceScopedT('description')}.{' '}
        {experienceScopedT('callToLinkedin')}{' '}
        <ExternalLink href="https://www.linkedin.com/in/italomlp">
          {experienceScopedT('profile')}
        </ExternalLink>
        .
      </Typography>

      {experiences.map((experience, index) => {
        const isLast = index === experiences.length - 1;
        return (
          <div key={experience._key} className="flex flex-col gap-2">
            <Typography>
              {experience.role} @{' '}
              <ExternalLink
                href={experience.companyLink}
                showExternalIcon={ShowExternalIcon.ON_HOVER}
              >
                {experience.company}
              </ExternalLink>
            </Typography>
            <Typography variant="muted">
              {getFormattedDate(experience.period)}
            </Typography>
            <PortableAdapter value={experience.description} />
            {!isLast && <Separator className="mt-2" />}
          </div>
        );
      })}
      <div className="flex flex-row justify-end italic opacity-75">
        <ExternalLink href="https://www.linkedin.com/in/italomlp">
          {experienceScopedT('checkMore')}
        </ExternalLink>
      </div>
    </SectionContainer>
  );
}
