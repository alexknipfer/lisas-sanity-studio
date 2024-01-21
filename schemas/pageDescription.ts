import { defineField, defineType } from 'sanity'

export const pageDescription = defineType({
  name: 'pageDescription',
  type: 'object',
  title: 'Page Description',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
