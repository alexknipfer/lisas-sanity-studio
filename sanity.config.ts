import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'
import { media } from 'sanity-plugin-media'

import { schemaTypes } from './schemas'
import { deskStructure } from './config/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Lisas Website Sanity Studio',

  projectId: 'tqyrdkqd',
  dataset: 'production',

  plugins: [structureTool({ structure: deskStructure }), visionTool(), inlineSvgInput(), media()],

  schema: {
    types: schemaTypes,
  },
})
