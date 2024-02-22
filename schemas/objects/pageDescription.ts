import { FormInput } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const pageDescription = defineType({
  name: 'pageDescription',
  type: 'object',
  title: 'Page Description',
  icon: FormInput,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
