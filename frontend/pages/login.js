import Head from 'next/head'
import { useState } from 'react'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

import useAuth from '../hooks/useAuth';

// Components
import AuthFalse from '../components/Login/AuthFalse'
import AuthTrue from '../components/Login/AuthTrue'

const Login = ({
  loginBackgroundPhoto,
  loginBackgroundPhoto2,
  loginAlexSubmitHoursLink,
  loginMikeSubmitHoursLink,
  loginAlexTimesheetLink,
  loginMikeTimesheetLink,
  loginScottSubmitHoursLink,
  loginScottTimesheetLink,
  loginCalebSubmitHoursLink,
  loginCalebTimesheetLink,
  loginMariaSubmitHoursLink,
  loginMariaTimesheetLink,
}) => {
  const { user, loading } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false)
  
  return (
    <>
      <Head>
        <title>Employee Page | Parish Digital Video Production</title>
      </Head>
      {!loggedIn 
        ? <AuthFalse loggedIn={setLoggedIn} /> 
        : <AuthTrue
          user={user}
          loading={loading}
          setLoggedIn={setLoggedIn}
          loginBackgroundPhoto={urlFor(loginBackgroundPhoto).auto('format')}
          loginBackgroundPhoto2={urlFor(loginBackgroundPhoto2).auto('format')}
          loginAlexSubmitHoursLink={loginAlexSubmitHoursLink}
          loginMikeSubmitHoursLink={loginMikeSubmitHoursLink}
          loginAlexTimesheetLink={loginAlexTimesheetLink}
          loginMikeTimesheetLink={loginMikeTimesheetLink}
          loginScottSubmitHoursLink={loginScottSubmitHoursLink}
          loginScottTimesheetLink={loginScottTimesheetLink}
          loginCalebSubmitHoursLink={loginCalebSubmitHoursLink}
          loginCalebTimesheetLink={loginCalebTimesheetLink}
          loginMariaSubmitHoursLink={loginMariaSubmitHoursLink}
          loginMariaTimesheetLink={loginMariaTimesheetLink}
        />
      }
    </>
  )
}

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "login" && slug.current == "v1"][0]{
  loginBackgroundPhoto,
  loginBackgroundPhoto2,
  loginAlexSubmitHoursLink,
  loginMikeSubmitHoursLink,
  loginAlexTimesheetLink,
  loginMikeTimesheetLink,
  loginScottSubmitHoursLink,
  loginScottTimesheetLink,
  loginCalebSubmitHoursLink,
  loginCalebTimesheetLink,
  loginMariaSubmitHoursLink,
  loginMariaTimesheetLink,
}`

export async function getStaticProps() {
  const props = await client.fetch(query)
  return { props, revalidate: 10 }
}

export default Login
