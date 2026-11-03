import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Serves api/contact.ts at /api/contact during `vite dev` so the form works locally.
function devApi(): Plugin {
  return {
    name: 'dev-api',
    configureServer(server) {
      Object.assign(process.env, loadEnv('development', process.cwd(), ''))
      server.middlewares.use('/api/contact', async (req, res) => {
        const chunks: Buffer[] = []
        for await (const chunk of req) chunks.push(chunk as Buffer)
        const { POST } = await server.ssrLoadModule('/api/contact.ts')
        const response: Response =
          req.method === 'POST'
            ? await POST(new Request('http://localhost/api/contact', { method: 'POST', body: Buffer.concat(chunks) }))
            : new Response('Method not allowed', { status: 405 })
        res.statusCode = response.status
        res.setHeader('Content-Type', response.headers.get('Content-Type') ?? 'text/plain')
        res.end(await response.text())
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), devApi()],
  server: {
  host: true,
  allowedHosts: [
    'tamar-unlanguishing-grimacingly.ng',
    '.ngrok-free.app',
    '.ngrok-free.dev',
    '.ngrok.io',
    '.ngrok.app',
  ],
},
})
