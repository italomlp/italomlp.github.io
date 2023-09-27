import Image from 'next/image';

import { SectionContainer } from '@/components/section-container';
import { Badge, Typography } from '@/components/ui';
import { getScopedI18n } from '@/locales/server';

type Props = {
  avatarUrl: string;
  authorName: string;
  shortBio: string;
  titles: {
    _key: string;
    title: string;
  }[];
};

export async function Hero({ avatarUrl, authorName, shortBio, titles }: Props) {
  const heroScopedT = await getScopedI18n('hero');

  return (
    <SectionContainer
      className={
        'sm:flex-row gap-8 sm:gap-12 items-center min-h-[calc(100vh-76px)] sm:pb-[76px]'
      }
    >
      <div>
        <Image
          priority
          width={500}
          height={500}
          src={avatarUrl}
          alt={heroScopedT('avatarAlt', { name: authorName })}
          className="rounded-full border-4 border-secondary dark:border-white"
        />
      </div>
      <div className="text-center sm:text-left">
        <div className="flex flex-col gap-4">
          <Typography variant="h1">
            {heroScopedT('greeting', { name: authorName })}
          </Typography>
          <Typography>{shortBio}</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mt-6 pb-8">
          {titles.map(title => (
            <Badge variant="secondary" key={title._key}>
              {title.title}
            </Badge>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
