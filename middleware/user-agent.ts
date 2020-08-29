import type { Context, Middleware } from '@nuxt/types'

declare module '@nuxt/types' {
  interface Context {
    userAgent?: string
  }
}

const userAgentMiddleware: Middleware = (context: Context) => {
  context.userAgent = process.server ? (context.req?.headers['user-agent'] ?? 'Unknown') : navigator.userAgent
}

export default userAgentMiddleware
