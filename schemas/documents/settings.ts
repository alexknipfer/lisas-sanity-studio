import { defineArrayMember, defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  type: 'document',
  title: 'Global Settings',
  fields: [
    defineField({
      name: 'socialItems',
      title: 'Social Links',
      description: 'These links appear on the left sidebar below page navigation links.',
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
