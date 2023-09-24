import { defineField, defineType } from '@sanity/types';

export const authorLinks = defineType({
  type: 'document',
  name: 'authorLinks',
  title: 'Author Links',
  fields: [
    defineField({
      type: 'string',
      name: 'label',
      title: 'Label',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'url',
      name: 'url',
      title: 'URL',
      validation: rule =>
        rule
          .uri({
            scheme: ['http', 'https', 'mailto'],
          })
          .required(),
    }),
    defineField({
      type: 'string',
      name: 'additionalDetail',
      title: 'Additional Detail',
      description: 'Optional',
    }),
    defineField({
      type: 'string',
      name: 'type',
      title: 'Type',
      validation: rule => rule.required(),
      options: {
        list: ['social', 'contact', 'other'],
      },
    }),
  ],
});
