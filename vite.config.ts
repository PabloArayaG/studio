import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage } from 'node:http'
import { handleContactSubmit } from './src/lib/hubspot/handle-contact-submit'

function readBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {})
      } catch {
        reject(new Error('Invalid JSON'))
      }
    })
    req.on('error', reject)
  })
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'contact-api-dev',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url !== '/api/contact' || req.method !== 'POST') {
            return next()
          }

          try {
            const body = (await readBody(req)) as Record<string, unknown>
            const pageUri =
              typeof body.pageUri === 'string' ? body.pageUri : undefined
            const { pageUri: _omit, ...formData } = body

            const result = await handleContactSubmit(formData, {
              pageUri: pageUri || undefined,
              pageName: 'Contacto',
              cookieHeader: req.headers.cookie,
            })

            res.setHeader('Content-Type', 'application/json')
            res.statusCode = result.status
            res.end(
              JSON.stringify(
                result.ok ? { ok: true } : { ok: false, message: result.message },
              ),
            )
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, message: 'Datos inválidos' }))
          }
        })
      },
    },
  ],
  server: {
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
    },
  },
})
