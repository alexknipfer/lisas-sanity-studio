import { defineArrayMember, defineField, defineType } from 'sanity'
import { NotebookText } from 'lucide-react'

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Pages',
  icon: NotebookText,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description:
        'This is the main heading on the page. Use a title that best describes the page content.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({ name: 'sidebarIcon', type: 'inlineSvg' }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'timeline',
          type: 'timeline',
        }),
        defineArrayMember({
          name: 'pageDescription',
          type: 'pageDescription',
        }),
      ],
    }),
    defineField({
      name: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})
