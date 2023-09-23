'use client';
import { useState } from 'react';

import { ExternalLinkIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Typography,
} from '@/components/ui';
import { cn } from '@/helpers/utils';

type Props = {
  href: string;
  children: React.ReactNode;
  showExternalIcon?: boolean | 'hover';
  tooltip?: string;
};

export function ExternalLink({
  href,
  children,
  showExternalIcon = true,
  tooltip,
}: Props) {
  const [hovering, setHovering] = useState(false);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
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
            {showExternalIcon && (
              <ExternalLinkIcon
                className={cn(
                  'transition-all duration-150',
                  showExternalIcon === 'hover' && !hovering && 'opacity-0',
                )}
                size={16}
              />
            )}
          </a>
        </Typography>
      </TooltipTrigger>
      {tooltip && <TooltipContent>{tooltip}</TooltipContent>}
    </Tooltip>
  );
}
