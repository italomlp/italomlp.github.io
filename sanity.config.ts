/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/cms-studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { internationalizedArray } from 'sanity-plugin-internationalized-array';
import { deskTool } from 'sanity/desk';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { deskStructure } from './sanity/deskStructure';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

const languages = [
  { id: 'pt', title: 'Portuguese' },
  { id: 'en', title: 'English' },
];

export default defineConfig({
  basePath: '/cms-studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    internationalizedArray({
      languages,
      defaultLanguages: [],
      fieldTypes: ['string', 'text', 'blockContent'],
    }),
  ],
});
