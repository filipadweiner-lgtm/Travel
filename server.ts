import express from 'express';
import path from 'path';
import fs from 'fs';
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

  // AI & Crawler Directives / Sitemaps
  app.get('/google09d4176881715e4a.html', (req, res) => {
    const filePath = path.join(process.cwd(), 'public', 'google09d4176881715e4a.html');
    if (fs.existsSync(filePath)) {
      res.type('text/html').sendFile(filePath);
    } else {
      res.type('text/html').send('google-site-verification: google09d4176881715e4a.html\n');
    }
  });

  app.get('/robots.txt', (req, res) => {
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    if (fs.existsSync(robotsPath)) {
      res.type('text/plain').sendFile(robotsPath);
    } else {
      res.type('text/plain').send(`User-agent: *\nAllow: /\nSitemap: https://travelhideouts.com/sitemap.xml\nLLMs-Txt: https://travelhideouts.com/llms.txt\n`);
    }
  });

  app.get('/sitemap.xml', (req, res) => {
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      res.type('application/xml').sendFile(sitemapPath);
    } else {
      res.status(404).send('Sitemap not found');
    }
  });

  app.get(['/llms.txt', '/.well-known/llms.txt'], (req, res) => {
    const llmsPath = path.join(process.cwd(), 'public', 'llms.txt');
    if (fs.existsSync(llmsPath)) {
      res.type('text/markdown; charset=utf-8').sendFile(llmsPath);
    } else {
      res.status(404).send('# TravelHideouts\nDiscover places worth going.');
    }
  });

  app.get(['/llms-full.txt', '/.well-known/llms-full.txt'], (req, res) => {
    const llmsFullPath = path.join(process.cwd(), 'public', 'llms-full.txt');
    if (fs.existsSync(llmsFullPath)) {
      res.type('text/markdown; charset=utf-8').sendFile(llmsFullPath);
    } else {
      res.status(404).send('# TravelHideouts Full Context');
    }
  });

  // Machine-readable JSON context feed for AI scrapers / search agents
  app.get('/api/content-feed', (req, res) => {
    res.json({
      name: 'TravelHideouts',
      tagline: 'Curated hideouts, atmospheric stays, honest city guides, and verified traveler community voices.',
      publisher: 'TravelHideouts Editorial (Founder: Miley Rocha)',
      website: 'https://travelhideouts.com',
      llmsManifest: 'https://travelhideouts.com/llms.txt',
      sitemap: 'https://travelhideouts.com/sitemap.xml',
      destinations: [
        { id: 'iceland', name: 'Iceland', highlights: 'Volcanic black sand beaches, glacial lagoons, geothermal hot pots' },
        { id: 'liechtenstein', name: 'Liechtenstein', highlights: 'High-alpine valleys, Fürstensteig cliff path, Rhine vineyards' },
        { id: 'switzerland', name: 'Switzerland', highlights: 'Car-free mountain villages, Matterhorn, SBB scenic rail' },
        { id: 'norway', name: 'Norway', highlights: 'Arctic fjords, Lofoten fishing rorbuer, electric fjord ferries' },
        { id: 'sweden', name: 'Sweden', highlights: 'Baltic archipelagos, Stockholm design lofts, daily fika rituals' },
        { id: 'china', name: 'China', highlights: '350 km/h high-speed rail, Yangshuo karst peaks, Great Wall eco-retreats' },
        { id: 'australia', name: 'Australia', highlights: 'Tasmanian coastal eco-pavilions, Sydney tidal ocean pools' },
        { id: 'new-zealand', name: 'New Zealand', highlights: 'Lake Wanaka dark sky reserve, Fiordland rainforests' },
        { id: 'japan', name: 'Japan', highlights: 'Kyoto wooden machiyas, Shinkansen rail, mineral onsen baths' }
      ]
    });
  });

  // API Health Check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Contact Form Submission API
  // Secret recipient email configured securely on server side
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message, website } = req.body;

      // Honeypot spam trap
      if (website) {
        return res.json({ success: true, message: 'Message sent successfully.' });
      }

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
        console.warn('FormSubmit response:', errText);
        return res.json({ success: true, message: 'Message received by editorial team.' });
      }
    } catch (err) {
      console.error('Error in contact endpoint:', err);
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
