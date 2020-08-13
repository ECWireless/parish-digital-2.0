import client from '../../client'
import groq from 'groq'

const query = groq`*[_type == "login" && slug.current == "v1"][0]{
    loginToken,
}`

export default async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json('Unauthorized!');
    }
    return client.fetch(query)
    .then(data => {
        if (authorization !== data.loginToken) {
            return res.status(401).json('Unauthorized!');
        }
        return res.status(200).json({loggedIn: true});
    })
}