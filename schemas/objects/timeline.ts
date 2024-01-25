import { defineArrayMember, defineField, defineType } from 'sanity'

export const timeline = defineType({
  name: 'timeline',
  title: 'Timeline',
  type: 'object',
  fields: [
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
  preview: {
    prepare() {
      return {
        title: 'Timeline',
      }
    },
  },
})
