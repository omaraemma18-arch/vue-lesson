<script setup>
import { ref } from 'vue';



const darkMode = ref(false)

function toggleDark(){
    darkMode.value = !darkMode.value
}

const count = ref(0)
function increment(){
    count.value = count.value +1
}
</script>

<template>
<button @click="increment" class="m-4 p-4 btn btn-primary">
    you have clicked this {{ count }} number of times
</button>

<button @click="toggleDark" class="m-4 p-4 btn btn-sm btn-secondary">
     Toggle to {{ darkMode ? 'light mode' :'dark mode' }}
</button>

</template>

<style scoped>
</style>