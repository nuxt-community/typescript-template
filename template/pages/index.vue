<template>
  <section class="pa4">
    <div class="bg-white-90 pa4">
      <div class="f1">Nuxt TypeScript Starter</div>
      <div class="f3">Selected Person: {{selectedPerson.first_name}} {{selectedPerson.last_name}}</div>
      {{selected}}
    </div>
    <div class="flex flex-wrap ph2 justify-between bg-white-80">
      <div v-for="person in people">
        <Card :person="person"></Card>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component"
import axios from "~plugins/axios"

import Card from "~components/Card.vue"

import { mapState } from "vuex"

export type Person = {
  first_name: string,
  last_name: string
}

@Component({
  components: {
    Card
  },
  computed: {
    ...mapState(['selected']),
    selectedPerson: function () {
      const p = this.people.find(person => person.id === this.selected)
      return p ? p : { first_name: 'Please,', last_name: 'select someone' }
    }
  }
})
export default class extends Vue {
  people: Person[] = []

  async asyncData() {
    const response = await axios.get('/random-data.json')
    const people = response.data.slice(0, 10)
    return { people }
  }
}
</script>