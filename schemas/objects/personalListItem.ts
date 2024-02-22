import { UserRound } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const personalListItem = defineType({
  name: 'personalListItem',
  title: 'Personal List Item',
  type: 'object',
  icon: UserRound,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'listItem',
      title: 'List Item',
      type: 'blockList',
    }),
  ],
})
