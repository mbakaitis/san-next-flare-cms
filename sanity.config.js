import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'blue-mongoose',

  projectId: 'r78pcm0h',
  dataset: 'ccf_examples',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
