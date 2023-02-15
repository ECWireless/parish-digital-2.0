import groq from 'groq'
import { useCallback, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import client from 'client'
import styled, { css } from 'styled-components'
import Image from 'next/image';
import Head from 'next/head';
import FuzzySearch from 'fuzzy-search';

import { shortenString, urlFor } from 'lib/helpers';

import { Box3 } from 'components/Boxes'
import respondTo from 'components/Breakpoints'
import { Card1 } from 'components/Cards'
import { Container, Flex } from 'components/Containers';
import { Line } from 'components/Lines'
import { colors } from 'components/theme'
import { H2, H4, P6 } from 'components/Typography'

const Blog = ({
  posts
}) => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState(posts);

  const onSearchChange = useCallback((e) => {
    setSearchText(e.target.value);
    if (e.target.value === '') {
      setResults(posts);
    } else {
      const searcher = new FuzzySearch(
        posts,
        ['title'],
        {
          sort: true,
        },
      );

      const searchResults = searcher.search(e.target.value);
      setResults(searchResults);
    }
  }, [posts]);

  return (
    <>
      <Head>
          <title>Blog | Parish Digital Video Production</title>
      </Head>
      <Container>
        <Box3 marginTop={75} marginBottom={50}>
          <Flex align={'center'} justify={'space-between'}>
            <Fade ssrFadeout>
              <CustomLine style={{margin: 0}} height={5} width={250} color={colors.yellow} />
            </Fade>
            <H2 uppercase center>
              BLOG
            </H2>
            <Fade ssrFadeout>
              <CustomLine style={{margin: 0}} height={5} width={250} color={colors.yellow} />
            </Fade>
          </Flex>
        </Box3>
        <SearchLabel htmlFor={'search'}>
          <Image src="/icons/search.svg" height={16} width={16} />
          <input type={'text'} id={'search'} onChange={onSearchChange} placeholder={'Search'} value={searchText} />
        </SearchLabel>
        <StyledArticlesContainer>
          {results.length > 0 && results.map(
            ({ _id, slug, ...rest }) =>
              slug && (
                <ArticleCard key={_id} post={rest} slug={slug} />
              )
          )}
        </StyledArticlesContainer>
        </Container>
      </>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts: posts.filter(p => p._id.includes('drafts.') === false),
    },
    revalidate: 10
  }
}

export default Blog;

const CustomLine =  styled(Line)`
	border-radius: 5px;
    
	${props => props.width && css`
		width: ${props.width * .25}px;

		${respondTo.sm`
      width: ${props.width * .5}px;
		`}

		${respondTo.md`
      width: ${props.width * .6}px;
		`}

		${respondTo.lg`
      width: ${props.width}px;
		`}

		${respondTo.xl`
      width: ${props.width * 1.8}px;
		`}
	`}
`;

const StyledArticlesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 100px;

  ${respondTo.md`
    justify-content: flex-start;
  `}
`;

const StyledBlogCard = styled(Card1)`
  height: 328px;
  padding: 0;
  transition: all 0.3s ease;
  width: 290px;

  ${respondTo.xs`
    width: 385px;
  `}

  ${respondTo.xl`
    width: 435px;
  `}

  &:hover {
    box-shadow: 5px 3px 25px -3px rgba(0,0,0,.1);
  }
`;

const SearchLabel = styled.label`
  align-items: center;
  border: 1px solid ${colors.black};
  border-radius: 50px;
  display: flex;
  gap: 12px;
  margin: 0 auto 32px;
  padding: 0 12px;
  width: 300px;

  input {
    background: transparent;
    border: none;
    height: 40px;
    outline: none;
    width: 240px;
  }
`;

const ArticleCard = ({
  post,
  slug,
}) => {
  const { title = '', publishedAt = '', mainImage = '' } = post;

  return (
    <li>
      <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
        <a style={{ textDecoration: 'none' }}>
          <StyledBlogCard>
            {mainImage && (
              <StyledCoverPhoto
                src={urlFor(mainImage).url()}
                alt={`${title} cover photo`}
              />
            )}
            <StyledDetailsContainer>
              <H4 color={colors.black}>{shortenString(title, 50)}</H4>
              <P6 color={colors.black}>
                Published on {new Date(publishedAt).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </P6>
            </StyledDetailsContainer>
          </StyledBlogCard>
        </a>
      </Link>
    </li>
  )
}

const StyledCoverPhoto = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;
`;
