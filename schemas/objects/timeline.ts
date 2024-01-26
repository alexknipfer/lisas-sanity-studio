import { defineArrayMember, defineField, defineType } from 'sanity'

export const timeline = defineType({
  name: 'timeline',
  title: 'Timeline',
  type: 'object',
  fields: [
    defineField({
      name: 'timelineItemIcon',
      description: 'Icon should be 1.5px stroke width and 24px in size',
      type: 'inlineSvg',
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
  preview: {
    prepare() {
      return {
        title: 'Timeline',
      }
    },
  },
})
