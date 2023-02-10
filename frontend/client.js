// client.js
import { createClient } from 'next-sanity'

// const token = process.env.SANITY_TOKEN; // Production
const token = process.env.BACKEND_SANITY_TOKEN; // Staging

export default createClient({
  // projectId: 'w1dauhhn', // Production
  projectId: 'pysf6rl6', // Staging
  dataset: 'production', // or the name you chose in step 1
  token,
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
  apiVersion: '2023-01-31',
})