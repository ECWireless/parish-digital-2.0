// sanity.config.js
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Parish Digital Staging Backend',
  projectId: 'pysf6rl6',
  dataset: 'production',
  plugins: [
    structureTool(),
  ],
  schema: {
    types: schemas,
  },
})