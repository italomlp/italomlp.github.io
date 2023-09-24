import { PortableText } from '@portabletext/react';

import { Typography } from '@/components/ui';

export function PortableAdapter(
  props: Omit<React.ComponentProps<typeof PortableText>, 'components'>,
) {
  return (
    <PortableText
      {...props}
      components={{
        block: {
          h1: ({ children }) => (
            <Typography variant="h1">{children}</Typography>
          ),
          h2: ({ children }) => (
            <Typography variant="h2">{children}</Typography>
          ),
          h3: ({ children }) => (
            <Typography variant="h3">{children}</Typography>
          ),
          h4: ({ children }) => (
            <Typography variant="h4">{children}</Typography>
          ),
          blockquote: ({ children }) => (
            <Typography variant="blockquote">{children}</Typography>
          ),
          normal: ({ children }) => (
            <Typography variant="paragraph">{children}</Typography>
          ),
        },
      }}
    />
  );
}
