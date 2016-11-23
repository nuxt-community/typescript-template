{{{{raw}}}}
<template>
  <section>
    <logo/>
    <h1 class="Title">
      This page is loaded from the {{ name }}
    </h1>
    <h2 class="Info" v-if="name === 'client'">
      Please refresh the page
    </h2>
    <router-link to="/">
      Home page
    </router-link>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  data ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head () {
    return {
      title: `About Page (${this.name}-side)`
    }
  },
  components: {
    Logo
  }
}
</script>

<style scoped>
.Title
{
  margin-top: 50px;
}
.Info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
a
{
  margin-top: 50px;
}
</style>
{{{{/raw}}}}
