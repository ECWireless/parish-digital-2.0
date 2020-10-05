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
    loginAlexSubmitHoursLink,
    loginMikeSubmitHoursLink,
    loginAlexTimesheetLink,
    loginMikeTimesheetLink,
}) => {
    const [loggedIn, setLoggedIn] = useState(false)
    
    return (
        <>
            <Head>
                <title>Login.auto('format') | Parish Digital Video Production</title>
            </Head>
            {!loggedIn 
                ? <AuthFalse loggedIn={setLoggedIn} /> 
                : <AuthTrue
                    setLoggedIn={setLoggedIn}
                    loginBackgroundPhoto={urlFor(loginBackgroundPhoto).auto('format')}
                    loginAlexSubmitHoursLink={loginAlexSubmitHoursLink}
                    loginMikeSubmitHoursLink={loginMikeSubmitHoursLink}
                    loginAlexTimesheetLink={loginAlexTimesheetLink}
                    loginMikeTimesheetLink={loginMikeTimesheetLink}
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
    loginAlexSubmitHoursLink,
    loginMikeSubmitHoursLink,
    loginAlexTimesheetLink,
    loginMikeTimesheetLink,
}`

login.getInitialProps = async function () {
    return await client.fetch(query)
}

export default login
