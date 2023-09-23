import { Metadata } from 'next';

import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { getCurrentLocale } from '@/locales/server';

import { client } from '../../../sanity/lib/client';

export const metadata: Metadata = {
  title: 'Italo Menezes',
};

function getData(locale: string) {
  return client.fetch(
    `
    {
      "author": *[_id == 'author'][0] {
        ...,
        avatar { asset-> { url } },
        "shortBio": shortBio[_key == $locale][0].value,
        "about": about[_key == $locale][0].value,
        location{
          ...,
          "country": country[_key == $locale][0].value
        }
      },
      "experiences": *[_type == 'experience'] {
        ...,
        "role": role[_key == $locale][0].value,
        "description": description[_key == $locale][0].value,
      } | order(period.startAt desc)
    }
  `,
    {
      locale,
    },
  );
}

export default async function Home() {
  const locale = getCurrentLocale();
  const { author, experiences } = await getData(locale);

  return (
    <>
      <Hero
        avatarUrl={author.avatar.asset.url}
        authorName={author.name}
        shortBio={author.shortBio}
        titles={author.titles}
      />

      <About
        birthDate={author.birthDate}
        location={author.location}
        skills={author.skills}
        about={author.about}
      />

      <Experience experiences={experiences} />
    </>
  );
}
