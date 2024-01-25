import { defineArrayMember, defineField, defineType } from 'sanity'

export const home = defineType({
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'sidebarOrder', type: 'number' }),
    defineField({ name: 'sidebarIcon', type: 'inlineSvg' }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'pageDescription',
          type: 'pageDescription',
        }),
      ],
    }),
  ],
})
