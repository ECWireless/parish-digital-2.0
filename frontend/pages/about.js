import Head from 'next/head'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

import Banner from '../components/About/Banner'
import Story from '../components/About/Story'
import Reviews from '../components/About/Reviews'
import Crew from '../components/About/Crew'

const about = ({
  bannerHeading,
  bannerParagraph,
  storyHeading,
  storyParagraph1,
  storyParagraph2,
  storyPhoto,
  reviewsHeading,
  reviewsSubheading,
  reviewsPhoto,
  reviewsQuote1,
  reviewsName1,
  reviewsPosition1,
  reviewsCompany1,
  reviewsQuote2,
  reviewsName2,
  reviewsPosition2,
  reviewsCompany2,
  reviewsQuote3,
  reviewsName3,
  reviewsPosition3,
  reviewsCompany3,
  crewHeading,
  crewParagraph,
  crew1Name,
  crew1Position,
  crew1Paragraph1,
  crew1Paragraph2,
  crew1Photo,
  crew2Name,
  crew2Position,
  crew2Paragraph1,
  crew2Paragraph2,
  crew2Photo,
  crew3Name,
  crew3Position,
  crew3Paragraph1,
  crew3Paragraph2,
  crew3Photo,
  crew4Name,
  crew4Position,
  crew4Paragraph1,
  crew4Paragraph2,
  crew4Photo,
  crew5Name,
  crew5Position,
  crew5Paragraph1,
  crew5Paragraph2,
  crew5Photo,
}) => {
  return (
    <>
      <Head>
        <title>About | Parish Digital Video Production</title>
      </Head>
      <Banner
        bannerHeading={bannerHeading}
        bannerParagraph={bannerParagraph}
      />
      <Story
        storyHeading={storyHeading}
        storyParagraph1={storyParagraph1}
        storyParagraph2={storyParagraph2}
        storyPhoto={urlFor(storyPhoto).auto('format')}
      />
      <Reviews
        reviewsHeading={reviewsHeading}
        reviewsSubheading={reviewsSubheading}
        reviewsPhoto={urlFor(reviewsPhoto).auto('format')}
        reviewsQuote1={reviewsQuote1}
        reviewsName1={reviewsName1}
        reviewsPosition1={reviewsPosition1}
        reviewsCompany1={reviewsCompany1}
        reviewsQuote2={reviewsQuote2}
        reviewsName2={reviewsName2}
        reviewsPosition2={reviewsPosition2}
        reviewsCompany2={reviewsCompany2}
        reviewsQuote3={reviewsQuote3}
        reviewsName3={reviewsName3}
        reviewsPosition3={reviewsPosition3}
        reviewsCompany3={reviewsCompany3}
      />
      <Crew
        crewHeading={crewHeading}
        crewParagraph={crewParagraph}
        crew1Name={crew1Name}
        crew1Position={crew1Position}
        crew1Paragraph1={crew1Paragraph1}
        crew1Paragraph2={crew1Paragraph2}
        crew1Photo={urlFor(crew1Photo).auto('format')}
        crew2Name={crew2Name}
        crew2Position={crew2Position}
        crew2Paragraph1={crew2Paragraph1}
        crew2Paragraph2={crew2Paragraph2}
        crew2Photo={urlFor(crew2Photo).auto('format')}
        crew3Name={crew3Name}
        crew3Position={crew3Position}
        crew3Paragraph1={crew3Paragraph1}
        crew3Paragraph2={crew3Paragraph2}
        crew3Photo={urlFor(crew3Photo).auto('format')}
        crew4Name={crew4Name}
        crew4Position={crew4Position}
        crew4Paragraph1={crew4Paragraph1}
        crew4Paragraph2={crew4Paragraph2}
        crew4Photo={urlFor(crew4Photo).auto('format')}
        crew5Name={crew5Name}
        crew5Position={crew5Position}
        crew5Paragraph1={crew5Paragraph1}
        crew5Paragraph2={crew5Paragraph2}
        crew5Photo={urlFor(crew5Photo).auto('format')}
      />
    </>
  )
}

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "about" && slug.current == "v1"][0]{
  bannerHeading,
  bannerParagraph,
  storyHeading,
  storyParagraph1,
  storyParagraph2,
  storyPhoto,
  reviewsHeading,
  reviewsSubheading,
  reviewsPhoto,
  reviewsQuote1,
  reviewsName1,
  reviewsPosition1,
  reviewsCompany1,
  reviewsQuote2,
  reviewsName2,
  reviewsPosition2,
  reviewsCompany2,
  reviewsQuote3,
  reviewsName3,
  reviewsPosition3,
  reviewsCompany3,
  crewHeading,
  crewParagraph,
  crew1Name,
  crew1Position,
  crew1Paragraph1,
  crew1Paragraph2,
  crew1Photo,
  crew2Name,
  crew2Position,
  crew2Paragraph1,
  crew2Paragraph2,
  crew2Photo,
  crew3Name,
  crew3Position,
  crew3Paragraph1,
  crew3Paragraph2,
  crew3Photo,
  crew4Name,
  crew4Position,
  crew4Paragraph1,
  crew4Paragraph2,
  crew4Photo,
  crew5Name,
  crew5Position,
  crew5Paragraph1,
  crew5Paragraph2,
  crew5Photo,
}`

about.getInitialProps = async function () {
  return await client.fetch(query)
}

export default about
