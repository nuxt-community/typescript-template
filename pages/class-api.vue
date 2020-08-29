<template>
  <main>
    <h1>With Class API</h1>
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
import { Component, Vue } from 'nuxt-property-decorator'
import type { RootState } from '~/store'
import { NamespacedActionType, SettingState } from '~/store/setting'

interface ToDo {
  userId: number
  id: number
  title: string
  completed: boolean
}

@Component({
  fetchOnServer: false,
  middleware: 'user-agent',
  asyncData (context) {
    return {
      asyncMessage: "I'm defined on asyncData()",
      userAgent: context.userAgent
    }
  },
  fetch (this: ClassApi) {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((data: ToDo[]) => { this.fetchedTodos = data })
  },
  head () {
    return {
      title: 'Composition API Demo'
    }
  }
})
export default class ClassApi extends Vue {
  message = "I'm defined on data()"
  fetchedTodos: ToDo[] = []
  asyncMessage = 'I will be overwritten by asyncData'
  userAgent = 'I will be overwritten by asyncData'

  get computedMessage (): string {
    return this.message.replace('data()', 'computed()')
  }

  get descriptionOnStore (): string {
    return (this.$store.state as RootState).description
  }

  get isDarkMode (): boolean {
    return (this.$store.state.setting as SettingState).darkMode
  }

  toggleDarkMode (): void {
    this.$store.dispatch(NamespacedActionType.TOGGLE_DARK_MODE)
  }
}
</script>
