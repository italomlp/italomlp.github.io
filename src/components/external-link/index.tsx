'use client';
import { useState } from 'react';

import { ExternalLinkIcon } from 'lucide-react';

import { ShowExternalIcon } from '@/components/external-link/types';
import { Typography } from '@/components/ui';
import { cn } from '@/helpers/utils';

type Props = {
  href: string;
  children: React.ReactNode;
  showExternalIcon?: ShowExternalIcon;
};

export function ExternalLink({
  href,
  children,
  showExternalIcon = ShowExternalIcon.SHOW,
}: Props) {
  const [hovering, setHovering] = useState(false);

  return (
    <Typography
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      variant="link"
      asChild
    >
      <a
        href={href}
        className="inline-flex flex-row gap-1.5 items-center"
        target="_blank"
        rel="noreferrer"
      >
        {children}
        {showExternalIcon != ShowExternalIcon.HIDE && (
          <ExternalLinkIcon
            className={cn(
              'transition-all duration-150',
              showExternalIcon === ShowExternalIcon.ON_HOVER &&
                !hovering &&
                'opacity-0',
            )}
            size={16}
          />
        )}
      </a>
    </Typography>
  );
}
