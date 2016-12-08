<template>
  <section class="container">
    <!--
      src="/logo.png" will be replaced by Webpack.
    -->
    <img src="/logo.png" alt="Nuxt.js Logo" />
    <!--
      Read error property to display more details of the Error.
    -->
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <!--
      Use router-link to create a link to an other pages.
    -->
    <router-link class="button" to="/">
      Homepage
    </router-link>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
