import { StructureResolver } from 'sanity/structure'
import { LayoutPanelTop, Cog, Home } from 'lucide-react'

const HOME_DOCUMENT_ID = '5c9fc8ce-405b-4b9d-b238-36e29cdf482a'
const SETTINGS_DOCUMENT_ID = '6a777759-8b2a-4963-980b-1130b0764fd5'

export const deskStructure: StructureResolver = (builder) =>
  builder
    .list()
    .title('Content')
    .items([
      builder
        .listItem()
        .title('Homepage')
        .icon(Home)
        .child(builder.document().id('home').schemaType('home').documentId(HOME_DOCUMENT_ID)),
      builder
        .listItem()
        .title('Pages')
        .icon(LayoutPanelTop)
        .child(builder.documentTypeList('page')),
      builder.divider(),
      builder
        .listItem()
        .title('Settings')
        .icon(Cog)
        .child(
          builder.document().id('settings').schemaType('settings').documentId(SETTINGS_DOCUMENT_ID),
        ),
    ])
