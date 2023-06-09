import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_EXAMPLE_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_EXAMPLE_DATASET,
  }
})
