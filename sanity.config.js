import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'blue-mongoose',

  projectId: process.env.SANITY_STUDIO_EXAMPLE_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_EXAMPLE_DATASET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
