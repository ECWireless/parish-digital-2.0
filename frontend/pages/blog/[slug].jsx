import groq from 'groq'
import { PortableText } from '@portabletext/react'
import styled from 'styled-components';
import client from 'client'
import { colors, shadows } from 'components/theme';
import Image from 'next/image';
import Link from 'next/link'

import { urlFor } from 'lib/helpers';

import respondTo from 'components/Breakpoints'
import { Container, Flex } from 'components/Containers';
import { H3, P4, P5 } from 'components/Typography'

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <StyledContentImage
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).auto('format')}
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
    publishedAt,
    topOfPageVideo,
    body = [],
    bottomOfPageVideo,
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
        <Flex align={'center'} mt={'12px'} respondFlip>
          {mainImage && (
            <StyledCoverPhoto
              src={urlFor(mainImage).url()}
              alt={`${title} cover photo`}
            />
          )}
          <Flex justify={'center'} width={'100%'} p={'20px'}>
            <div>
              <H3>{title}</H3>
              <Flex mt={'8px'}>
                <P5>Published on {new Date(publishedAt).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </P5>
              </Flex>
              <Flex align={'center'} gap={'8px'} mt={'20px'} mb={'8px'}>
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
            </div>
          </Flex>
        </Flex>
        <StyledContentBackground>
          <StyledContentContainer>
            {topOfPageVideo && <VideoContainer>
              <Video
                src={topOfPageVideo}
                frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
              />
            </VideoContainer>}
            <PortableText
              value={body}
              components={ptComponents}
            />

            {bottomOfPageVideo && <VideoContainer>
              <Video
                src={bottomOfPageVideo}
                frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
              />
            </VideoContainer>}
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
  publishedAt,
  topOfPageVideo,
  body,
  bottomOfPageVideo
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
  margin-top: 20px;
  object-fit: cover;
  min-width: 100%;

  ${respondTo.sm`
    margin-top: 40px;
  `}

  ${respondTo.lg`
    min-width: 50%;
  `}

  ${respondTo.xl`
    height: 400px;
  `}
`;

const StyledAuthorImage = styled.img`
  border-radius: 50%;
  width: 30px;
`;

const StyledContentImage = styled.img`
  width: 100%;
`;


const StyledContentBackground = styled.div`
  background: transparent;

  ${respondTo.lg`
    background: rgba(167, 176, 188, 0.2);
  `}
`;

const StyledContentContainer = styled.div`
  background: ${colors.grey};
  font-size: 1.4rem;
  line-height: 20px;
  letter-spacing: .5px;
  margin: 40px auto;
  padding: 20px;
  width: 100%;

  ${respondTo.sm`
    font-size: 1.5rem;
    padding: 40px;
  `}

  ${respondTo.md`
    font-size: 1.6rem;
    width: 800px;
  `}

  ${respondTo.xl`
    font-size: 2.2rem;
    line-height: 25px;
    width: 1200px;
  `}
`;

const VideoContainer = styled.div`
  width: 26rem;
  height: 15rem;
  margin: 0 auto 40px;

  ${respondTo.xs`
    width: 36rem;
    height: 21rem;
  `}

  ${respondTo.sm`
    width: 50rem;
    height: 29rem;
  `}

  ${respondTo.md`
    width: 59rem;
    height: 34rem;
  `}

  ${respondTo.xl`
    width: 88rem;
    height: 50rem;
  `}
`

const Video = styled.iframe`
  box-shadow: ${shadows.card};
  height: 100%;
  width: 100%;
`

