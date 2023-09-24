import {
  GithubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapIcon,
  TwitterIcon,
} from 'lucide-react';

import { ExternalLink } from '@/components/external-link';
import { Separator, Typography } from '@/components/ui';
import { AuthorLink } from '@/types/author-link';

type Props = {
  authorName: string;
  socialLinks: AuthorLink[];
  contactLinks: AuthorLink[];
};

function getIcon(linkUrl: string) {
  if (linkUrl.includes('linkedin')) {
    return LinkedinIcon;
  }
  if (linkUrl.includes('github')) {
    return GithubIcon;
  }
  if (linkUrl.includes('mailto')) {
    return MailIcon;
  }
  if (linkUrl.includes('twitter')) {
    return TwitterIcon;
  }
  if (linkUrl.includes('instagram')) {
    return InstagramIcon;
  }
  if (linkUrl.includes('maps')) {
    return MapIcon;
  }
  return GlobeIcon;
}

export function Footer({ socialLinks, contactLinks, authorName }: Props) {
  function renderIcon(url: string) {
    const Icon = getIcon(url);
    return <Icon size={16} />;
  }

  const links = socialLinks.concat(contactLinks);

  return (
    <footer>
      <Separator className="mb-8" />

      <div className="flex flex-col sm:flex-row justify-around">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-2 mx-auto sm:mx-0">
          {links.map(link => (
            <li key={link.url}>
              <ExternalLink
                href={link.url}
                showExternalIcon={false}
                tooltip={link.additionalDetail}
              >
                {renderIcon(link.url)} {link.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-8 text-center">
        <Typography variant="muted">
          © {new Date().getFullYear()} {authorName}
        </Typography>
      </div>
    </footer>
  );
}
