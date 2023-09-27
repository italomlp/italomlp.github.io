'use client';

import { Typography } from '@/components/ui';

export function Copyright({ authorName }: { authorName: string }) {
  return (
    <Typography variant="muted">
      © {new Date().getFullYear()} {authorName}
    </Typography>
  );
}
