import Head from 'next/head'
import { useState } from 'react'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import AuthFalse from '../components/Login/AuthFalse'
import AuthTrue from '../components/Login/AuthTrue'

const login = ({
    loginBackgroundPhoto,
    loginBackgroundPhoto2,
    loginAlexSubmitHoursLink,
    loginMikeSubmitHoursLink,
    loginAlexTimesheetLink,
    loginMikeTimesheetLink,
    loginScottSubmitHoursLink,
    loginScottTimesheetLink,
}) => {
    const [loggedIn, setLoggedIn] = useState(false)
    
    return (
        <>
            <Head>
                <title>Employee Page | Parish Digital Video Production</title>
            </Head>
            {!loggedIn 
                ? <AuthFalse loggedIn={setLoggedIn} /> 
                : <AuthTrue
                    setLoggedIn={setLoggedIn}
                    loginBackgroundPhoto={urlFor(loginBackgroundPhoto).auto('format')}
                    loginBackgroundPhoto2={urlFor(loginBackgroundPhoto2).auto('format')}
                    loginAlexSubmitHoursLink={loginAlexSubmitHoursLink}
                    loginMikeSubmitHoursLink={loginMikeSubmitHoursLink}
                    loginAlexTimesheetLink={loginAlexTimesheetLink}
                    loginMikeTimesheetLink={loginMikeTimesheetLink}
                    loginScottSubmitHoursLink={loginScottSubmitHoursLink}
                    loginScottTimesheetLink={loginScottTimesheetLink}
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
}`

login.getInitialProps = async function () {
    return await client.fetch(query)
}

export default login
