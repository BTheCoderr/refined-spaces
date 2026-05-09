import { Resend } from 'resend'

const MAX_LEN = 8000

function json(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
}

function sanitize(v) {
  if (typeof v !== 'string') return ''
  return v.trim().slice(0, MAX_LEN)
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  let parsed
  try {
    parsed = JSON.parse(event.body || '{}')
  } catch {
    return json(400, { error: 'Invalid request' })
  }

  const name = sanitize(parsed.name)
  const email = sanitize(parsed.email)
  const interest = sanitize(parsed.interest)
  const message = sanitize(parsed.message)

  if (!name || !email || !interest || !message) {
    return json(400, { error: 'Invalid request' })
  }

  if (!isValidEmail(email)) {
    return json(400, { error: 'Invalid request' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.RESEND_TO_EMAIL
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || 'Refined Spaces <onboarding@resend.dev>'

  if (!apiKey || !toEmail) {
    console.error('Contact email: missing RESEND_API_KEY or RESEND_TO_EMAIL')
    return json(503, { error: 'Notifications unavailable' })
  }

  const resend = new Resend(apiKey)
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeInterest = escapeHtml(interest)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>')

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Interest: ${interest}`,
    '',
    'Message:',
    message,
    '',
    'Submitted from website',
  ].join('\n')

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Refined Spaces inquiry from ${name}`,
      text: textBody,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Interest:</strong> ${safeInterest}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <p><em>Submitted from website</em></p>
      `,
    })

    if (result.error) {
      console.error('Contact email: Resend API error')
      return json(502, { error: 'Unable to send notification' })
    }

    return json(200, { ok: true })
  } catch {
    console.error('Contact email: send failed')
    return json(502, { error: 'Unable to send notification' })
  }
}
