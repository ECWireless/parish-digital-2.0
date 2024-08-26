// sanity.config.js
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Parish Digital Backend',
  projectId: 'w1dauhhn',
  dataset: 'production',
  plugins: [
    structureTool(),
  ],
  schema: {
    types: schemas,
  },
})