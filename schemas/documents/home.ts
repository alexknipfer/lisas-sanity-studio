import { defineArrayMember, defineField, defineType } from 'sanity'

export const home = defineType({
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    defineField({
      name: 'title',
      description:
        'This text will appear at the top of your home page as the primary heading. It is recommended to choose a header that best describes the page content.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'pageDescription',
          type: 'pageDescription',
        }),
        defineArrayMember({
          name: 'personalInformation',
          type: 'personalInformation',
        }),
      ],
    }),
    defineField({
      name: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page Content',
      }
    },
  },
})
