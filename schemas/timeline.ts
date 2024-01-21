import { defineArrayMember, defineField, defineType } from 'sanity'

export const timeline = defineType({
  name: 'timeline',
  title: 'Timeline',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Timeline Name',
      type: 'string',
    }),
    defineField({
      name: 'timelineYears',
      title: 'Timeline Years',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'timelineYear',
          type: 'timelineYear',
        }),
      ],
    }),
  ],
})
