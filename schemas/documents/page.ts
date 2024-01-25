import { defineArrayMember, defineField, defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({ name: 'sidebarOrder', type: 'number' }),
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
  ],
})
