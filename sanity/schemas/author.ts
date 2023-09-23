import { defineArrayMember, defineField, defineType } from '@sanity/types';

export const author = defineType({
  type: 'document',
  name: 'author',
  title: 'Author',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'avatar',
      title: 'Avatar',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'internationalizedArrayText',
      name: 'shortBio',
      title: 'Short Bio',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'internationalizedArrayBlockContent',
      name: 'about',
      title: 'About',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'date',
      name: 'birthDate',
      title: 'Birth Date',
      validation: rule => rule.required(),
      options: {
        dateFormat: 'MMM DD, YYYY',
      },
    }),
    defineField({
      type: 'object',
      name: 'location',
      title: 'Location',
      validation: rule => rule.required(),
      fields: [
        defineField({
          type: 'string',
          name: 'cityLabel',
          title: 'City Label',
          validation: rule => rule.required(),
        }),
        defineField({
          type: 'internationalizedArrayString',
          name: 'country',
          title: 'Country',
          validation: rule => rule.required(),
        }),
        defineField({
          type: 'url',
          name: 'url',
          title: 'Maps URL',
          validation: rule => rule.required(),
        }),
      ],
    }),
    defineField({
      type: 'array',
      name: 'skills',
      title: 'Skills',
      of: [defineArrayMember({ type: 'string' })],
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'titles',
      title: 'Titles',
      validation: rule =>
        rule
          .required()
          .min(1)
          .custom(value => {
            if (
              value &&
              value?.filter(title => (title as { main: boolean }).main)
                ?.length !== 1
            ) {
              return 'You must select one, and just one, title as the main title';
            }
            return true;
          }),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'titleObject',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
              title: 'Title',
              validation: rule => rule.required(),
            }),
            defineField({
              type: 'boolean',
              name: 'main',
              title: 'Main',
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
  ],
});
