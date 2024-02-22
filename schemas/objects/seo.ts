import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  type: 'object',
  title: 'SEO & Social',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Title for SEO & Social Sharing',
      type: 'string',
      description:
        'Make it as enticing as possible to convert users in social feeds and Google searches. Ideally between 50 and 60 characters.',
      validation: (rule) =>
        rule.required().min(50).max(60).warning('Must be between 50 and 60 characters'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Short paragraph for SEO & Social Sharing (meta description)',
      type: 'string',
      description:
        '⚡️ Optional but highly encouraged as it will help you convet more visitors from Google & social. Ideally between 70 and 160 characters.',
      validation: (rule) => rule.min(0).max(160).warning('Must be between 50 and 60 characters'),
    }),
  ],
})
