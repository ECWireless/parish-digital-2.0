import client from '../../client'
import groq from 'groq'

const query = groq`*[_type == "login" && slug.current == "v1"][0]{
  loginPassword,
}`

export default async (req, res) => {
  const bcrypt = require('bcrypt');
  // const saltRounds = 10;
  // bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
  // });

  const plainPassword = req.body.password;
  return Promise.resolve(res.status(200).json({ error: plainPassword }))
  const queryObject = await client.fetch(query)
  const hash = await queryObject.loginPassword
  const match = await bcrypt.compare(plainPassword, hash);
  if (match) {
    return createSessions()
    .then(token => {
      client.patch(process.env.SANITY_DOC_ID).set({loginToken: token}).commit()
      .then(doc => {
        return Promise.resolve(res.status(200).json({ password: 'logged in! Token:', token: doc.loginToken }))
      })
      .catch(err => {
        console.error('Oh no, the update failed: ', err.message)
        return Promise.resolve(res.status(500).json({ password: err.message }))
      })
    })
    .catch(err => {
      console.error(err)
      return Promise.resolve(res.status(401).json({ password: err }));
    })
  } else {
    return Promise.resolve(res.status(200).json({ password: 'wrong password!' }))
  }
}

const createSessions = () => {
  const token = signToken('Keith')
  return Promise.resolve(token)
}

const signToken = () => {
  const jwt = require('jsonwebtoken');
  const jwtPayload = { name: 'test' };
  return Promise.resolve(jwt.sign(jwtPayload, 'secret', { expiresIn: '2 days'}))
}
