import Head from 'next/head'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Banner from '../components/About/Banner'
import Story from '../components/About/Story'
import Expertise from '../components/About/Expertise'
import Crew from '../components/About/Crew'
import Network from '../components/About/Network'
import Location from '../components/About/Location'

const about = ({
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
    storyHeading1,
    storyParagraph1,
    storyParagraph2,
    storyHeading2,
    storyParagraph3,
    storyParagraph4,
    storyPhoto,
    expertiseHeading,
    expertiseParagraph,
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
    networkHeading,
    networkParagraph,
    locationHeading,
    locationParagraph1,
    locationParagraph2,
}) => {
    return (
        <>
            <Head>
                <title>About | Parish Digital Video Production</title>
            </Head>
            <Banner
                bannerHeading={bannerHeading}
                bannerParagraph={bannerParagraph}
                bannerPhoto={urlFor(bannerPhoto).auto('format')}
            />
            <Story
                storyHeading1={storyHeading1}
                storyParagraph1={storyParagraph1}
                storyParagraph2={storyParagraph2}
                storyHeading2={storyHeading2}
                storyParagraph3={storyParagraph3}
                storyParagraph4={storyParagraph4}
                storyPhoto={urlFor(storyPhoto).auto('format')}
            />
            <Expertise
                expertiseHeading={expertiseHeading}
                expertiseParagraph={expertiseParagraph}
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
            />
            <Network
                networkHeading={networkHeading}
                networkParagraph={networkParagraph}
            />
            <Location
                locationHeading={locationHeading}
                locationParagraph1={locationParagraph1}
                locationParagraph2={locationParagraph2}
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
    bannerPhoto,
    storyHeading1,
    storyParagraph1,
    storyParagraph2,
    storyHeading2,
    storyParagraph3,
    storyParagraph4,
    storyPhoto,
    expertiseHeading,
    expertiseParagraph,
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
    networkHeading,
    networkParagraph,
    locationHeading,
    locationParagraph1,
    locationParagraph2,
}`

about.getInitialProps = async function () {
    return await client.fetch(query)
}

export default about
