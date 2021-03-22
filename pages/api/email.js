const sendGrid = require('@sendgrid/mail')
const API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
sendGrid.setApiKey(API_KEY)

export default async (req, res) => {
  // const { query: { id, name }, method, body: {name, email, message} } = req
  const { method, body } = req
  
  if (method === 'POST') {
    const { name, email, message } = body

    // Validating Data
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) || name === '' || message === '') {
      console.log('Bad Request: ', body)
      return res.status(404).json({
        status : 404,
        message: "Bad request",
        data: {}
      })
    }

    // E-mail Configuration
    const mail = {
      to: 'mitri.dvp@gmail.com',
      from: `${name} <mitri-dev@mitri-dev.xyz>`,
      subject: 'Correo del Portafolio',
      text: ` Name: ${name}, Email: ${email}, Message: ${message}.`,
      html: `
      <div style="
      max-width: 20rem;
      border-radius: 1rem;
      border: 1px solid #00000020;
      padding: 2rem;
      ">
        <div style="margin-bottom: 1.5rem;">
          <h4 style="margin-top: 0;text-align: center;">Message:</h4>
          <p>
            ${message}
          </p>
        </div>
        <hr style="color: #00000020;">
        <div style="margin-top: 1.5rem;text-align: center;">
          ${name} <br/>
          ${email} <br/>
        </div>
      </div>`
    }

    // Send Mail Intent
    const result = await sendGrid.send(mail).catch((error) => {
      console.log('Mail Error:', error)
    });

    // Error Catcher
    if(!result) {
      return res.status(500).json({
        status : 500,
        message: "Mail not sent",
        data : {}
      })
    }
    
    // Success Logger
    console.log('Mail sent: ', result)
    return res.status(200).json({
      status : 200,
      message: "Mail sent",
      data: result
    })
  }

  // Requet Method Not Supported
  return res.status(503).json({
    status : 503,
    message: "Endpoint not supported",
    data : {}
  })
}
