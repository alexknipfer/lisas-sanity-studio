import { defineField, defineType } from 'sanity'

export const personalListItem = defineType({
  name: 'personalListItem',
  title: 'Personal List Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'listItem',
      title: 'List Item',
      type: 'blockList',
    }),
  ],
})
