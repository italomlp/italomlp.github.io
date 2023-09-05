import { Metadata } from 'next';
import Image from 'next/image';

import { Typography } from '@/components/ui';
import { getCurrentLocale } from '@/locales/server';

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

  console.log('author', author);

  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 content-center h-[calc(100vh-76px)] sm:pb-[76px]">
      <div className="self-center">
        <Image
          width={300}
          height={300}
          src={author.avatar.asset.url}
          alt="Author's avatar"
          className="rounded-full"
        />
      </div>
      <div className="self-center text-center sm:text-left">
        <Typography variant="h1">{author.name}</Typography>
        <Typography>{author.shortBio}</Typography>
      </div>
    </div>
  );
}
