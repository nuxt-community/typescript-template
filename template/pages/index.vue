<template>
  <section class="pa4">
    <div class="bg-white-90 pa4">
      <div class="f1">Nuxt TypeScript Starter</div>
      <div class="f3">Selected Person: {{selectedPerson.first_name}} {{selectedPerson.last_name}}</div>
      {{selected}}
    </div>
    <div class="flex flex-wrap ph2 justify-between bg-white-80">
      <div v-for="person in people">
        <div class="ba b--black-20 mw5 ma2">
          <img :src="'https://robots.johnlindquist.com/' + person.first_name + '_' + person.last_name" />
          <div class="flex flex-column items-center pa2 b--black-20">
            <div class="f4">{{person.first_name}} {{person.last_name}}</div>
            <button @click="select(person.id)" class="w-100 bg-blue dim mv2 pv2 bn pointer">Select</button>
          </div>
        </div>
  
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "~plugins/nuxt-class-component";
import axios from "~plugins/axios";

import { mapState, mapMutations } from "vuex"

export type Person = {
  first_name: string,
  last_name: string
}

@Component({
  computed: {
    ...mapState(['selected']),
    selectedPerson: function () {
      const p = this.people.find(person => person.id === this.selected)
      return p ? p : { first_name: 'Please,', last_name: 'select someone' }
    }
  },
  methods: {
    ...mapMutations({
      select: 'SELECT'
    })
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