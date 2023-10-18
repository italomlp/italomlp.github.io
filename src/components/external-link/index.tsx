import { ExternalLinkIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Typography,
} from '@/components/ui';

type Props = {
  href: string;
  children: React.ReactNode;
  showExternalIcon?: boolean | 'hover';
  tooltip?: string;
} & React.ComponentPropsWithoutRef<typeof Typography>;

export function ExternalLink({
  href,
  children,
  showExternalIcon = true,
  tooltip,
  ...props
}: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Typography {...props} variant="link" asChild className="group">
          <a
            href={href}
            className="inline-flex flex-row gap-1.5 items-center"
            target="_blank"
            rel="noreferrer"
          >
            {children}
            {showExternalIcon && (
              <ExternalLinkIcon
                className="transition-all duration-150 opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto"
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
