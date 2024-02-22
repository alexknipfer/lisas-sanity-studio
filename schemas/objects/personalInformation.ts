import { UserRound } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const personalInformation = defineType({
  name: 'personalInformation',
  title: 'Personal Information',
  type: 'object',
  icon: UserRound,
  fields: [
    defineField({
      name: 'personalList',
      title: 'Personal List',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'personalListItem',
          type: 'personalListItem',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Personal Information',
      }
    },
  },
})
