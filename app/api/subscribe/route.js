export async function POST(request) {
  try {
    const formData = await request.formData()
    const email = formData.get('email')

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // TODO: Integrate with email provider (Mailchimp, ConvertKit, etc.)
    // For now, log and return success
    console.log(`New subscriber: ${email}`)

    // Redirect back with success message
    return new Response(null, {
      status: 302,
      headers: { Location: '/?subscribed=1' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
