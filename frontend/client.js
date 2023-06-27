// client.js
import { createClient } from 'next-sanity'

const token = process.env.BACKEND_SANITY_TOKEN;

export default createClient({
  projectId: process.env.BACKEND_SANITY_PROJECT_ID,
  dataset: 'production', // or the name you chose in step 1
  token,
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
  apiVersion: '2023-01-31',
})
