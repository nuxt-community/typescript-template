<template>
  <main>
    <h1>With Composition API <small>*Experimental</small></h1>
    <h2>data ()</h2>
    <p>
      {{ message }}
    </p>
    <h2>computed ()</h2>
    <p>
      {{ computedMessage }}
    </p>
    <h2>asyncData ()</h2>
    <p>
      {{ asyncMessage }}
    </p>
    <h2>fetch ()</h2>
    <p v-if="fetchState.pending || !fetchState.timestamp">
      Fetching from frontend...
    </p>
    <ul v-else>
      <li
        v-for="todo in fetchedTodos.slice(0, 5)"
        :key="todo.id"
      >
        {{ todo.completed ? '&#9989;' : '&#11036;' }} {{ todo.id }}: {{ todo.title }}
      </li>
    </ul>
    <h2>Vuex Store</h2>
    <ul>
      <li>On root store: {{ descriptionOnStore }}</li>
      <li>On setting store (namespaced): dark mode is <strong>{{ isDarkMode ? 'enabled' : 'disabled' }}</strong></li>
      <a
        href
        @click.prevent="toggleDarkMode"
      >
        Toggle dark mode
      </a>
    </ul>
    <h2>Nuxt Middleware</h2>
    <p>{{ userAgent }}</p>
    <h2>Nuxt Plugin</h2>
    <p>{{ $truncate(userAgent || '') }}</p>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useAsync, useContext, useFetch, useMeta } from '@nuxtjs/composition-api'

import type { RootState } from '~/store'
import { namespace as settingStoreNamespace, SettingState, actionType } from '~/store/setting'

interface ToDo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default defineComponent({
  fetchOnServer: false,
  middleware: 'user-agent',

  setup (_props, context) {
    const message = ref("I'm defined on data()")
    const fetchedTodos = ref<ToDo[]>([])

    const descriptionOnStore = computed(() => (context.root.$store.state as RootState).description)
    const computedMessage = computed(() => message.value.replace('data()', 'computed()'))
    const isDarkMode = computed(() => (context.root.$store.state.setting as SettingState).darkMode)

    const toggleDarkMode = (): void => {
      context.root.$store.dispatch(`${settingStoreNamespace}/${actionType.TOGGLE_DARK_MODE}`)
    }

    const asyncMessage = useAsync(() => "I'm defined on asyncData()")
    const userAgent = useAsync(() => useContext().userAgent)

    const { fetchState } = useFetch(() => {
      return window.fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then((data: ToDo[]) => { fetchedTodos.value = data })
    })

    useMeta(() => ({
      title: 'Composition API Demo',
      meta: [{
        name: 'message',
        content: computedMessage.value
      }]
    }))

    return {
      message,
      asyncMessage,
      userAgent,
      fetchState,
      fetchedTodos,
      toggleDarkMode,
      descriptionOnStore,
      computedMessage,
      isDarkMode
    }
  },

  head: {}
})
</script>
