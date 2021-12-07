// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  // projectId: 'w1dauhhn', // Production
  projectId: 'pysf6rl6', // Staging
  dataset: 'production', // or the name you chose in step 1
  token: process.env.SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
})