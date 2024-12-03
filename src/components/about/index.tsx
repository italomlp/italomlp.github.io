import { TypedObject } from '@portabletext/types';

import { ExternalLink } from '@/components/external-link';
import { PortableAdapter } from '@/components/portable-adapter';
import { SectionContainer } from '@/components/section-container';
import { Badge, Typography } from '@/components/ui';
import { yearsDifference } from '@/helpers/date';
import { getScopedI18n } from '@/locales/server';

type Props = {
  birthDate: string;
  location: {
    cityLabel: string;
    country: string;
    url: string;
  };
  skills: string[];
  about: TypedObject[];
};

export async function About({ birthDate, location, skills, about }: Props) {
  const aboutScopedT = await getScopedI18n('about');
  const age = yearsDifference(new Date(), birthDate);

  return (
    <SectionContainer id="about">
      <Typography variant="h1">{aboutScopedT('title')}</Typography>

      <div className="flex flex-row items-center gap-2">
        <Typography>{age}</Typography>
        <Typography>{location.country}</Typography>
        <ExternalLink href={location.url} tooltip={aboutScopedT('location')}>
          {location.cityLabel}
        </ExternalLink>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <Badge variant="secondary" key={skill}>
            {skill}
          </Badge>
        ))}
      </div>

      <PortableAdapter value={about} />
    </SectionContainer>
  );
}
