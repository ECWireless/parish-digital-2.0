import Head from 'next/head'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// import Banner from '../components/Gear/Banner'
import Examples from '../components/Gear/Examples'

const gear = ({
    // bannerHeading,
    // bannerParagraph,
    // bannerPhoto,
    example1Heading,
    example1BackgroundPhoto,
    example1ProductPhoto,
    example1Item1,
    example1Item2,
    example1Item3,
    example1Item4,
    example1Item5,
    example1Item6,
    example1Item7,
    example1Item8,
    example2Heading,
    example2BackgroundPhoto,
    example2ProductPhoto,
    example2Item1,
    example2Item2,
    example2Item3,
    example2Item4,
    example2Item5,
    example2Item6,
    example2Item7,
    example2Item8,
    example3Heading,
    example3BackgroundPhoto,
    example3ProductPhoto,
    example3Item1,
    example3Item2,
    example3Item3,
    example3Item4,
    example3Item5,
    example3Item6,
    example3Item7,
    example3Item8,
    example4Heading,
    example4BackgroundPhoto,
    example4ProductPhoto,
    example4Item1,
    example4Item2,
    example4Item3,
    example4Item4,
    example4Item5,
    example4Item6,
    example4Item7,
    example4Item8,
}) => {
    return (
        <>
            <Head>
                <title>Gear | Parish Digital Video Production</title>
            </Head>
            {/* <Banner
                bannerHeading={bannerHeading}
                bannerParagraph={bannerParagraph}
                bannerPhoto={urlFor(bannerPhoto).auto('format')}
            /> */}
            <Examples
                example1Heading={example1Heading}
                example1BackgroundPhoto={urlFor(example1BackgroundPhoto).auto('format')}
                example1ProductPhoto={urlFor(example1ProductPhoto).auto('format')}
                example1Item1={example1Item1}
                example1Item2={example1Item2}
                example1Item3={example1Item3}
                example1Item4={example1Item4}
                example1Item5={example1Item5}
                example1Item6={example1Item6}
                example1Item7={example1Item7}
                example1Item8={example1Item8}
                example2Heading={example2Heading}
                example2BackgroundPhoto={urlFor(example2BackgroundPhoto).auto('format')}
                example2ProductPhoto={urlFor(example2ProductPhoto).auto('format')}
                example2Item1={example2Item1}
                example2Item2={example2Item2}
                example2Item3={example2Item3}
                example2Item4={example2Item4}
                example2Item5={example2Item5}
                example2Item6={example2Item6}
                example2Item7={example2Item7}
                example2Item8={example2Item8}
                example3Heading={example3Heading}
                example3BackgroundPhoto={urlFor(example3BackgroundPhoto).auto('format')}
                example3ProductPhoto={urlFor(example3ProductPhoto).auto('format')}
                example3Item1={example3Item1}
                example3Item2={example3Item2}
                example3Item3={example3Item3}
                example3Item4={example3Item4}
                example3Item5={example3Item5}
                example3Item6={example3Item6}
                example3Item7={example3Item7}
                example3Item8={example3Item8}
                example4Heading={example4Heading}
                example4BackgroundPhoto={urlFor(example4BackgroundPhoto).auto('format')}
                example4ProductPhoto={urlFor(example4ProductPhoto).auto('format')}
                example4Item1={example4Item1}
                example4Item2={example4Item2}
                example4Item3={example4Item3}
                example4Item4={example4Item4}
                example4Item5={example4Item5}
                example4Item6={example4Item6}
                example4Item7={example4Item7}
                example4Item8={example4Item8}
            />
        </>
    )
}

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "gear" && slug.current == "v1"][0]{
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
    example1Heading,
    example1BackgroundPhoto,
    example1ProductPhoto,
    example1Item1,
    example1Item2,
    example1Item3,
    example1Item4,
    example1Item5,
    example1Item6,
    example1Item7,
    example1Item8,
    example2Heading,
    example2BackgroundPhoto,
    example2ProductPhoto,
    example2Item1,
    example2Item2,
    example2Item3,
    example2Item4,
    example2Item5,
    example2Item6,
    example2Item7,
    example2Item8,
    example3Heading,
    example3BackgroundPhoto,
    example3ProductPhoto,
    example3Item1,
    example3Item2,
    example3Item3,
    example3Item4,
    example3Item5,
    example3Item6,
    example3Item7,
    example3Item8,
    example4Heading,
    example4BackgroundPhoto,
    example4ProductPhoto,
    example4Item1,
    example4Item2,
    example4Item3,
    example4Item4,
    example4Item5,
    example4Item6,
    example4Item7,
    example4Item8,
}`

gear.getInitialProps = async function () {
    return await client.fetch(query)
}

export default gear
