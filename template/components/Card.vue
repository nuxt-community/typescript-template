<template>
  <div class="ba b--black-20 mw5 ma2">
    <img :src="'https://robots.johnlindquist.com/' + person.first_name + '_' + person.last_name" />
    <div class="flex flex-column items-center pa2 b--black-20">
      <div class="f4">{{person.first_name}} {{person.last_name}}</div>
      <button @click="select(person.id)" class="w-100 bg-blue dim mv2 pv2 bn pointer">Select</button>
    </div>
  </div>
</template>
// **PLEASE NOTE** All "Nuxt Class Components" require at minimum a script tag that exports a default object
<script lang="ts">
import Vue from "vue"
import Component from "nuxt-class-component"

import { mapMutations } from "vuex"

@Component({
  props: {
    person: Object
  },
  methods: {
    ...mapMutations([
      "select"
    ])
  }
})
export default class Card extends Vue {
  person
}
</script>