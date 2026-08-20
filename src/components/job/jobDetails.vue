<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

</script>

<template>
<h1>Job Details for Job ID: {{ id }}</h1>

</template>

<style scoped>


</style>