<template>
  <section class="container">
    <!--
      src="../assets/img/logo.png" will be replaced by Webpack.
    -->
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      A minimalistic framework <br>for server-rendered Vue.js applications
    </h1>
    <!--
      Use router-link to create a link to an other pages.
    -->
    <router-link class="button" to="/about">
      About page
    </router-link>
  </section>
</template>

<style scoped>
/*
  Scoped : This css belongs to this component only
*/
.title
{
  margin: 50px 0;
}
</style>
