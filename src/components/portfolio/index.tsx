import { TypedObject } from '@portabletext/types';

import { ExternalLink } from '@/components/external-link';
import { PortableAdapter } from '@/components/portable-adapter';
import { SectionContainer } from '@/components/section-container';
import { Badge, Separator, Typography } from '@/components/ui';
import { toFormattedMonthAndYear } from '@/helpers/date';
import { getScopedI18n } from '@/locales/server';

type Props = {
  githubUrl: string;
  portfolio: {
    _id: string;
    title: string;
    description: TypedObject[];
    links: {
      label: string;
      url: string;
    }[];
    when: string;
  }[];
};

export async function Portfolio({ portfolio, githubUrl }: Props) {
  const portfolioScopedT = await getScopedI18n('portfolio');

  return (
    <SectionContainer id="portfolio" className="pb-8">
      <Typography variant="h1" className="mt-8">
        {portfolioScopedT('title')}
      </Typography>

      <Typography variant="blockquote" className="opacity-75">
        {portfolioScopedT('description')}. {portfolioScopedT('callToAction')}{' '}
        <ExternalLink href={githubUrl}>
          {portfolioScopedT('profile')}
        </ExternalLink>
        .
      </Typography>

      {portfolio.map((project, index) => {
        const isLast = index === portfolio.length - 1;
        return (
          <div key={project._id} className="flex flex-col gap-2">
            <Typography fontStyle="bold">{project.title}</Typography>
            <Typography variant="muted">
              {toFormattedMonthAndYear(project.when)}
            </Typography>
            <div className="flex flex-row flex-wrap gap-2">
              {project.links.map(link => (
                <Badge variant="secondary" key={link.url}>
                  <ExternalLink href={link.url}>{link.label}</ExternalLink>
                </Badge>
              ))}
            </div>
            <PortableAdapter value={project.description} />
            {!isLast && <Separator className="mt-2" />}
          </div>
        );
      })}
      <div className="flex flex-row justify-end opacity-75">
        <ExternalLink href={githubUrl} fontStyle="italic">
          {portfolioScopedT('checkMore')}
        </ExternalLink>
      </div>
    </SectionContainer>
  );
}
