import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'

const Post = (props) => {
    const { title = 'Missing title', name = 'Missing name', body = [] } = props
    return (
      <article>
        <h1>{title}</h1>
        <BlockContent
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
        />
      </article>
    )
  }
  
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    body
  }`
  
  Post.getInitialProps = async function (context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const slug = 'home-page'
    return await client.fetch(query, { slug })
  }
  
  export default Post