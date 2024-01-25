import { defineField, defineType } from 'sanity'

export const timelineItem = defineType({
  name: 'timelineItem',
  title: 'Timeline Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
