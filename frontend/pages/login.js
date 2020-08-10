import { useState } from 'react'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import AuthFalse from '../components/Login/AuthFalse'
import AuthTrue from '../components/Login/AuthTrue'

const login = ({
    loginPassword,
}) => {
    const [password, setPassword] = useState('')
    
    return (
        <>
            {password !== loginPassword ? <AuthFalse /> : <AuthTrue />}
        </>
    )
}

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "login" && slug.current == "v1"][0]{
    loginPassword,
}`

login.getInitialProps = async function () {
    return await client.fetch(query)
}

export default login
