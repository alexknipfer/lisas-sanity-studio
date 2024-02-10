import { defineArrayMember, defineType } from 'sanity'

export const blockList = defineType({
  title: 'Block List',
  name: 'blockList',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        annotations: [],
        decorators: [],
      },
      styles: [],
    }),
  ],
})
