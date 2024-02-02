import { defineArrayMember, defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'socialItems',
      title: 'Social Item List',
      description: 'Social links to be displayed.',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'social',
          type: 'social',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})
