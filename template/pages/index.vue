<template>
  <section class="pa4 code">
    <div class="bg-white-90 pa4">
      <div class="f1">Nuxt TypeScript Starter</div>
      <div class="f3">Selected Person: {{selectedPerson.first_name}} {{selectedPerson.last_name}} is #{{selected}}</div>

    </div>
    <div class="flex flex-wrap ph2 justify-between bg-white-80">
      <div :key="person.id" v-for="person in people">
        <Card :person="person"></Card>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component"
import Card from "~/components/Card.vue"
import { State, Getter } from "vuex-class"

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State selected
  @State people
  @Getter selectedPerson
}
</script>
