import type { Plugin } from '@nuxt/types'

type Truncater = (text: string) => string

declare module 'vue/types/vue' {
  interface Vue {
    $truncate: Truncater
  }
}

const truncater: Truncater = (text: string) => text.length > 15 ? text.substring(0, 15) : text

const truncatePlugin: Plugin = (_context, inject) => {
  inject('truncate', truncater)
}

export default truncatePlugin
