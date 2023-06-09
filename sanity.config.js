import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const deskStructure = {
  structure: (S, context) => {
    console.log(context);
    return S.list()
      // title for the studio in use
      .title('Example.com - Content')
      .items([
        // first of our singletons - some "global" stuff
        S.listItem()
          .title('Global Content Fields')
          .child(
            S.editor()
              .schemaType('globalContent')
              .documentId('globalContent')
          ),
        // second singleton for "site settings"
        S.listItem()
          .title('Site Settings')
          .child(
            S.editor()
              .schemaType('siteSettings')
              .documentId('siteSettings')
          ),
        // Add a visual divider
        S.divider(),
        // List out the rest of the document types, but filter out the config type
        ...S.documentTypeListItems()
          .filter(item => {
            // removing the singletons, because if we do not they will show again and NOT be singletons
            return ((item.getId() !== 'globalContent') && (item.getId() !== 'siteSettings'))
          }),
      ])
  }
}

export default defineConfig({
  name: 'default',
  title: 'blue-mongoose',

  projectId: process.env.SANITY_STUDIO_EXAMPLE_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_EXAMPLE_DATASET,

  plugins: [
    deskTool(deskStructure), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
