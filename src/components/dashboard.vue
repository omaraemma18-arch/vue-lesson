<script setup>
import sidebar from './sidebar.vue'

</script>

<template>

  <header class="header" id="header">
    <sidebar />
  </header>
  <br/>
  <br/>
  <main class="main" id="main">
    <div class="content">
      <router-view/>
    </div></main>

 
</template>

<style scoped>

</style>