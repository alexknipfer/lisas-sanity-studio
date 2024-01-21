import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'

import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Lisas Website Sanity Studio',

  projectId: 'tqyrdkqd',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), inlineSvgInput()],

  schema: {
    types: schemaTypes,
  },
})
