<template>
  <main>
    <h1>With Composition API *Experimental</h1>
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
    <p v-if="$fetchState.pending">
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
    <p>{{ $truncate(userAgent) }}</p>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
import type { RootState } from '~/store'
import { NamespacedActionType, SettingState } from '~/store/setting'

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
    const message = "I'm defined on data()"
    const descriptionOnStore = computed(() => (context.root.$store.state as RootState).description)
    const computedMessage = computed(() => message.replace('data()', 'computed()'))
    const isDarkMode = computed(() => (context.root.$store.state.setting as SettingState).darkMode)

    const toggleDarkMode = () => {
      context.root.$store.dispatch(NamespacedActionType.TOGGLE_DARK_MODE)
    }

    return {
      message,
      fetchedTodos: ref<ToDo[]>([]),
      toggleDarkMode,
      descriptionOnStore,
      computedMessage,
      isDarkMode
    }
  },

  fetch () {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((data: ToDo[]) => { this.fetchedTodos = data })
  },

  asyncData (context) {
    return {
      asyncMessage: "I'm defined on asyncData()",
      userAgent: context.userAgent
    }
  },

  head () {
    return {
      title: 'Composition API Demo'
    }
  }
})
</script>
