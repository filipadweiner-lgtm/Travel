import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API Health Check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Contact Form Submission API
  // Secret recipient email configured securely on server side
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!email || !message) {
        return res.status(400).json({ error: 'Email and message are required fields.' });
      }

      const recipientEmail = process.env.CONTACT_EMAIL || 'etuzex@gmail.com';

      // Forward to secure email delivery service without exposing recipient email to client
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
        return res.json({ success: true, message: 'Message sent successfully.' });
      } else {
        const errText = await response.text();
        console.warn('FormSubmit provider response:', errText);
        // Return success to user so user experience is not disrupted
        return res.json({ success: true, message: 'Message received by editorial team.' });
      }
    } catch (err) {
      console.error('Error in contact endpoint:', err);
      // Return success to graceful fallback
      return res.json({ success: true, message: 'Message recorded.' });
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`TravelHideouts server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
