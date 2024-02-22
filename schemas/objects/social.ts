import { defineField, defineType } from 'sanity'
import { Link } from 'lucide-react'

export const social = defineType({
  name: 'social',
  title: 'Social',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'inlineSvg',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'link',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
        media: Link,
      }
    },
  },
})
