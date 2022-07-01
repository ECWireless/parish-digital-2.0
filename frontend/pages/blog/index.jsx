import groq from 'groq'
import Link from 'next/link'
import { Container } from 'components/Containers';

import client from 'client'

const Blog = ({posts}) => {
  return (
    <Container>
      <h1>Welcome to the blog!</h1>
      {posts.length > 0 && posts.map(
        ({ _id, title = '', slug = '', publishedAt = '' }) =>
          slug && (
            <li key={_id}>
              <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                <a>{title}</a>
              </Link>{' '}
              ({new Date(publishedAt).toDateString()})
            </li>
          )
      )}
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

export default Blog