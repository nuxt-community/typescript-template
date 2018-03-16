import Vue from 'vue'

declare module '*.vue' {
  const _default: Vue
  export default _default
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    head?: any
    layout?: string
  }
}
