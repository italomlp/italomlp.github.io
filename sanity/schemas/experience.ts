import { defineField, defineType } from '@sanity/types';

export const experience = defineType({
  type: 'document',
  name: 'experience',
  title: 'Experience',
  fields: [
    defineField({
      type: 'internationalizedArrayString',
      name: 'role',
      title: 'Role',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'company',
      title: 'Company',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'url',
      name: 'companyLink',
      title: 'Company Link',
      description: 'Optional',
    }),
    defineField({
      type: 'internationalizedArrayBlockContent',
      name: 'description',
      title: 'Description',
      validation: rule => rule.required(),
    }),
    defineField({
      type: 'boolean',
      name: 'isCurrent',
      title: 'Is Current?',
      validation: rule => rule.required(),
      initialValue: false,
    }),
    defineField({
      type: 'object',
      name: 'period',
      title: 'Period',
      validation: rule => rule.required(),
      fields: [
        defineField({
          type: 'date',
          name: 'startAt',
          title: 'Start At',
          validation: rule => rule.required(),
          options: {
            dateFormat: 'MMM, YYYY',
          },
        }),
        defineField({
          type: 'date',
          name: 'endAt',
          title: 'End At',
          validation: rule =>
            rule.custom((value, { document }) => {
              console.log('value', value, document);
              if (document && !document.isCurrent && !value) {
                return 'Fill in when this experience finished';
              }
              return true;
            }),
          options: {
            dateFormat: 'MMM, YYYY',
          },
        }),
      ],
    }),
  ],
});
