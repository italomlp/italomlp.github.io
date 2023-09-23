import { Metadata } from 'next';
import Image from 'next/image';

import { Badge, Typography } from '@/components/ui';
import { getCurrentLocale, getScopedI18n } from '@/locales/server';

import { client } from '../../../sanity/lib/client';

export const metadata: Metadata = {
  title: 'Italo Menezes',
};

function getAuthor(locale: string) {
  return client.fetch(
    `
    *[_id == 'author'][0] {
      ...,
      avatar { asset-> { url } },
      "shortBio": shortBio[_key == $locale][0].value,
      "about": about[_key == $locale][0].value
    }
  `,
    {
      locale,
    },
  );
}

export default async function Home() {
  const locale = getCurrentLocale();
  const author = await getAuthor(locale);
  const heroScopedT = await getScopedI18n('hero');

  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center h-[calc(100vh-76px)] sm:pb-[76px]">
      <div>
        <Image
          width={500}
          height={500}
          src={author.avatar.asset.url}
          alt={heroScopedT('avatarAlt', { name: author.name })}
          className="rounded-full border-4 border-secondary dark:border-white"
        />
      </div>
      <div className="text-center sm:text-left">
        <div>
          <Typography variant="h1">
            {heroScopedT('greeting', { name: author.name })}
          </Typography>
          <Typography>{author.shortBio}</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mt-6 pb-8">
          {author.titles.map(title => (
            <Badge variant="secondary" key={title._key}>
              {title.title}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
