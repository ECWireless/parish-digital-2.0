import sgMail from '@sendgrid/mail';

export default async function Hello(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, message } = req.body

  const confirmationEmail = {
    to: email,
    from: 'Hello@parishdigital.com',
    subject: `Submission was successful!`,
    html: `
      <p>Thank you for contacting us! We will be in touch shortly.</p>
      <br/>
      <h3>Your submission details:</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `
  }

  const notificationEmail = {
    to: 'Hello@parishdigital.com',
    from: 'Hello@parishdigital.com',
    cc: 'Alex@parishdigital.com',
    subject: `New Contact Form Submission - ${email}`,
    html: `
      <h3>Submission Details:</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `
  }

  try {
    await sgMail.send(confirmationEmail)
    await sgMail.send(notificationEmail)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
