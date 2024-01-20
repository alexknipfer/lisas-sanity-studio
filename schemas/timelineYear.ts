import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'timelineYear',
  title: 'Timeline Year',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'timelineItems',
      title: 'Timeline Items',
      type: 'array',
      of: [{type: 'reference', to: {type: 'timelineItem'}}],
    }),
  ],
})
