{{{{raw}}}}
<template>
  <section class="container">
    <!--
      src="../assets/img/logo.png" will be replaced by Webpack.
    -->
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" />
    <h1 class="title">
      This page is loaded from the {{ name }}
    </h1>
    <h2 class="info" v-if="name === 'client'">
      Please refresh the page
    </h2>
    <!--
      Use router-link to create a link to an other pages.
    -->
    <router-link class="button" to="/">
      Home page
    </router-link>
  </section>
</template>
{{{{/raw}}}}
<script>
export default {
  data ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head () {
    // Use vue-meta to change HTML Head Meta Title for this page.
    return {
      title: `About Page (${this.name}-side)`
    }
  }
}
</script>

<style scoped>
/*
  Scoped : This css belongs to this component only
*/
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
