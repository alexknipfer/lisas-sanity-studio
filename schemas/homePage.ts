import { defineArrayMember, defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    defineField({ name: 'title', type: 'string' }),
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
