export const handler = async (event: { httpMethod: string; body?: string | null }) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, subject, message, website } = data;

    // Honeypot spam trap: if 'website' is filled, silently discard
    if (website) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true, message: 'Message sent successfully.' })
      };
    }

    if (!email || !message) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Email and message are required.' })
      };
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'etuzex@gmail.com';

    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name || 'Anonymous Reader',
        email: email,
        _replyto: email,
        _subject: `[TravelHideouts Contact] ${subject || 'Reader Message'} — ${name || 'Reader'}`,
        subject: subject || 'Editorial feedback / Question',
        message: message,
        _template: 'table'
      })
    });

    if (response.ok) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true, message: 'Message sent successfully.' })
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Message received.' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to send message.' })
    };
  }
};
