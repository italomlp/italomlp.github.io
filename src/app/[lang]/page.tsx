import { Metadata } from 'next';

import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { FloatingButton } from '@/components/floating-button';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Portfolio } from '@/components/portfolio';
import { getScopedI18n } from '@/locales/server';
import { AuthorLink } from '@/types/author-link';

import { client } from '../../../sanity/lib/client';

export async function generateMetadata(): Promise<Metadata> {
  const { name } = await getAuthorName();
  const scopedT = await getScopedI18n('meta');

  return {
    title: `${name} - ${scopedT('title')}`,
    description: scopedT('description'),
  };
}

function getAuthorName() {
  return client.fetch(
    `
    *[_id == 'author'][0] {
      name
    }
  `,
  );
}

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
      } | order(period.startAt desc),
      "socialLinks": *[_type == 'authorLinks' && type == "social"],
      "contactLinks": *[_type == 'authorLinks' && type == "contact"],
      "portfolio": *[_type == 'portfolio'] {
        ...,
        "title": title[_key == $locale][0].value,
        "description": description[_key == $locale][0].value,
        "links": links[]{
          ...,
          "label": label[_key == $locale][0].value
        },
      }
    }
  `,
    {
      locale,
    },
  );
}

export default async function Home({
  params: { lang: locale },
}: {
  params: { lang: string };
}) {
  const { author, experiences, socialLinks, contactLinks, portfolio } =
    await getData(locale);
  const mainScopedLocale = await getScopedI18n('main');

  const linkedin = socialLinks.find((link: AuthorLink) =>
    link.url.includes('linkedin'),
  );
  const github = socialLinks.find((link: AuthorLink) =>
    link.url.includes('github'),
  );

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

      <Experience experiences={experiences} linkedinUrl={linkedin.url} />

      <Portfolio githubUrl={github.url} portfolio={portfolio} />

      <Footer
        socialLinks={socialLinks}
        contactLinks={contactLinks}
        authorName={author.name}
      />

      <FloatingButton>{mainScopedLocale('backToTop')}</FloatingButton>
    </>
  );
}
