import { useState } from 'react'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import AuthFalse from '../components/Login/AuthFalse'
import AuthTrue from '../components/Login/AuthTrue'

const login = ({
    loginPassword,
    loginBackgroundPhoto,
    loginAlexSubmitHoursLink,
    loginMikeSubmitHoursLink,
    loginAlexTimesheetLink,
    loginMikeTimesheetLink,
}) => {
    const [password, setPassword] = useState('')
    
    return (
        <>
            {password !== loginPassword 
                ? <AuthFalse setPassword={setPassword} /> 
                : <AuthTrue
                    setPassword={setPassword}
                    loginBackgroundPhoto={urlFor(loginBackgroundPhoto)}
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
    loginPassword,
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
