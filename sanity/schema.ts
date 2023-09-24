import { type SchemaTypeDefinition } from 'sanity';

import { author } from './schemas/author';
import { authorLinks } from './schemas/authorLinks';
import { blockContent } from './schemas/block';
import { experience } from './schemas/experience';
import { portfolio } from './schemas/portfolio';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blockContent, experience, portfolio, authorLinks],
};

export const intlSchemas = [
  // 'author'
];
