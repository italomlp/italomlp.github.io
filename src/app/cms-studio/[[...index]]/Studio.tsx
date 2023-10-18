'use client';

import dynamic from 'next/dynamic';

const NextStudio = dynamic(() =>
  import('next-sanity/studio').then(res => res.NextStudio),
);

export async function Studio() {
  const config = (await import('../../../../sanity.config')).default;

  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />;
}
