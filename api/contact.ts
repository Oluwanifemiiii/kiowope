// Serverless handler for the contact form (Vercel-style: POST /api/contact).
// The Resend key stays server-side. It is read from RESEND_API_KEY, never bundled into the client.

const TO = process.env.CONTACT_TO ?? 'james.clinton@kiowope.money'
// The domain must be verified in Resend (resend.com/domains). Override with CONTACT_FROM until then.
const FROM = process.env.CONTACT_FROM ?? 'Kiowope Capital Website <website@kiowope.money>'

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return json({ error: 'Email service is not configured.' }, 500)

  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return json({ error: 'Invalid request.' }, 400)
  }

  // Honeypot: real visitors never fill this hidden field.
  if (data.website) return json({ ok: true })

  const field = (key: string, max: number) => String(data[key] ?? '').trim().slice(0, max)
  const name = field('name', 120)
  const email = field('email', 200)
  const phone = field('phone', 60)
  const org = field('org', 200)
  const message = field('message', 5000)

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please provide your name, a valid email and a message.' }, 400)
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone || '-'],
    ['Organization', org || '-'],
  ]
  const html =
    rows.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join('') +
    `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Website inquiry from ${name}`,
      html,
      text: [...rows.map(([k, v]) => `${k}: ${v}`), '', message].join('\n'),
    }),
  })

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text())
    return json({ error: 'Could not send your message. Please try again.' }, 502)
  }
  return json({ ok: true })
}
