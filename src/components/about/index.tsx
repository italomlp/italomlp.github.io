import { TypedObject } from '@portabletext/types';

import { PortableAdapter } from '@/components/portable-adapter';
import { SectionContainer } from '@/components/section-container';
import {
  Badge,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Typography,
} from '@/components/ui';
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
  const age = new Date().getFullYear() - new Date(birthDate).getFullYear();

  return (
    <SectionContainer>
      <TooltipProvider>
        <Typography variant="h1">{aboutScopedT('title')}</Typography>

        <div className="flex flex-row items-center gap-2">
          <Typography>{age}</Typography>
          <Typography>{location.country}</Typography>
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <Typography variant="link" asChild>
                <a href={location.url}>{location.cityLabel}</a>
              </Typography>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              {aboutScopedT('location')}
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <Badge variant="secondary" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>

        <PortableAdapter value={about} />
      </TooltipProvider>
    </SectionContainer>
  );
}
