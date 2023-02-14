import Head from 'next/head'
import groq from 'groq'
import client from 'client'

import Examples from 'components/Work/Examples'

const Work = ({
  heading,
  subheading,
  example1Link,
  example2Link,
  example3Link,
  example4Link,
  example5Link,
  example6Link,
  example7Link,
  example8Link,
  example9Link,
  example10Link,
  example11Link,
  example12Link,
}) => {
  return (
    <>
      <Head>
        <title>Work | Parish Digital Video Production</title>
      </Head>
      <Examples
        heading={heading}
        subheading={subheading}
        example1Link={example1Link}
        example2Link={example2Link}
        example3Link={example3Link}
        example4Link={example4Link}
        example5Link={example5Link}
        example6Link={example6Link}
        example7Link={example7Link}
        example8Link={example8Link}
        example9Link={example9Link}
        example10Link={example10Link}
        example11Link={example11Link}
        example12Link={example12Link}
      />
    </>
  )
}

const query = groq`*[_type == "work" && slug.current == "v1"][0]{
    heading,
    subheading,
    example1Link,
    example2Link,
    example3Link,
    example4Link,
    example5Link,
    example6Link,
    example7Link,
    example8Link,
    example9Link,
    example10Link,
    example11Link,
    example12Link,
}`

export async function getStaticProps() {
  const props = await client.fetch(query)
  return { props, revalidate: 10 }
}

export default Work
