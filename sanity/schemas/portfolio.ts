import { defineArrayMember, defineField, defineType } from '@sanity/types';

export const portfolio = defineType({
  type: 'document',
  name: 'portfolio',
  title: 'Portfolio',
  fields: [
    defineField({
      type: 'internationalizedArrayString',
      name: 'title',
      title: 'Title',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'cover',
      title: 'Cover Image',
    }),
    defineField({
      type: 'internationalizedArrayBlockContent',
      name: 'description',
      title: 'Description',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'links',
      title: 'Links',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'linkObject',
          fields: [
            defineField({
              type: 'internationalizedArrayString',
              name: 'label',
              title: 'Link Label',
              validation: rule => rule.required(),
            }),
            defineField({
              type: 'url',
              name: 'url',
              title: 'URL',
              validation: rule => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      type: 'date',
      name: 'when',
      title: 'When',
      validation: rule => rule.required(),
      options: {
        dateFormat: 'MMM, YYYY',
      },
    }),
    defineField({
      type: 'string',
      name: 'type',
      title: 'type',
      options: {
        list: ['publication', 'project', 'other'],
      },
      validation: rule => rule.required(),
    }),
  ],
});
