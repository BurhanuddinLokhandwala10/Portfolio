import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { Resend } from 'resend';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                const { name, email, message, honeypot } = JSON.parse(body || '{}');

                if (honeypot) {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true }));
                  return;
                }

                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Name, email, and message are required.' }));
                  return;
                }

                const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
                const recipient =
                  env.CONTACT_RECIPIENT_EMAIL ||
                  process.env.CONTACT_RECIPIENT_EMAIL ||
                  'burlokh23@gmail.com';

                if (!apiKey || apiKey === 'your_resend_api_key_here' || !apiKey.startsWith('re_')) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(
                    JSON.stringify({
                      error:
                        'Resend API key missing or invalid. Please paste your valid key (re_...) into the .env file in the project folder.',
                    })
                  );
                  return;
                }

                const resend = new Resend(apiKey);
                const result = await resend.emails.send({
                  from: 'Portfolio Contact <onboarding@resend.dev>',
                  to: [recipient],
                  replyTo: email,
                  subject: `New Portfolio Inquiry from ${name}`,
                  html: `
                    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
                      <h2 style="color: #0f172a; margin-top: 0; font-size: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">New Portfolio Message</h2>
                      <p style="margin: 8px 0; color: #475569;"><strong>Sender Name:</strong> ${name}</p>
                      <p style="margin: 8px 0; color: #475569;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
                      <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #7C8CFF;">
                        <p style="margin: 0; color: #1e293b; white-space: pre-wrap; line-height: 1.6;">${message}</p>
                      </div>
                      <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">Sent from Burhanuddin Lokhandwala's Portfolio Contact Form.</p>
                    </div>
                  `,
                });

                if (result.error) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: result.error.message }));
                  return;
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, data: result.data }));
              } catch (err: any) {
                console.error('Local Resend Error:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message || 'Resend API call failed' }));
              }
            });
          });
        },
      },
    ],
  };
});
