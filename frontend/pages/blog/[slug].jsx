import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import styled from 'styled-components';
import client from 'client'
import { colors } from 'components/theme';
import Image from 'next/image';
import Link from 'next/link'

import respondTo from 'components/Breakpoints'
import { Container, Flex } from 'components/Containers';
import { H3, P4 } from 'components/Typography'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({post}) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    // categories,
    authorImage,
    mainImage,
    body = []
  } = post
  return (
    <article>
      <Container>
        <Flex mt={'48px'}>
          <Link href="/blog">
            <StyledLink>
              <Image src="/icons/arrow.svg" height={20} width={20} />
              <P4>View more posts</P4>
            </StyledLink>
          </Link>
        </Flex>
        <Flex align={'center'} mt={'12px'}>
          {mainImage && (
            <StyledCoverPhoto
              src={urlFor(mainImage).url()}
              alt={`${title} cover photo`}
            />
          )}
          <Flex direction={'column'} p={'0px 40px'}>
            <H3>{title}</H3>
            <Flex align={'center'} gap={'8px'} mt={'20px'}>
              {authorImage && (
                <StyledAuthorImage
                  src={urlFor(authorImage).url()}
                  alt={`${name}'s picture`}
                />
              )}
              <P4>By {name}</P4>
            </Flex>
            {/* {categories && (
              <ul>
                Posted in
                {categories.map(category => <li key={category}>{category}</li>)}
              </ul>
            )} */}
          </Flex>
        </Flex>
        <StyledContentBackground>
          <StyledContentContainer>
            <PortableText
              value={body}
              components={ptComponents}
            />
          </StyledContentContainer>
          </StyledContentBackground>
      </Container>
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post;

const StyledLink = styled.a`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  padding: 4px;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledCoverPhoto = styled.img`
  height: 300px;
  object-fit: cover;
  width: 50%;
`;

const StyledAuthorImage = styled.img`
  border-radius: 50%;
  width: 30px;
`;


const StyledContentBackground = styled.div`
  background: rgba(167, 176, 188, 0.2);
`;

const StyledContentContainer = styled.div`
  background: ${colors.grey};
  font-size: 1.4rem;
  line-height: 20px;
  letter-spacing: .5px;
  margin: 40px auto;
  padding: 40px;
  width: 800px;

  ${respondTo.sm`
    font-size: 1.5rem;
  `}

  ${respondTo.md`
    font-size: 1.6rem;
  `}

  ${respondTo.xl`
    font-size: 2.2rem;
    line-height: 25px;
  `}
`;

