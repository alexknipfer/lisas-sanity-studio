import { defineArrayMember, defineField, defineType } from 'sanity'

export const timelineYear = defineType({
  name: 'timelineYear',
  title: 'Timeline Year',
  type: 'object',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'timelineItems',
      type: 'array',
      title: 'Timeline Items',
      of: [
        defineArrayMember({
          name: 'timelineItem',
          type: 'timelineItem',
        }),
      ],
    }),
  ],
})
