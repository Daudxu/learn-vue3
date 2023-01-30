

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <p class="read-the-docs">Footer</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>


<!-- <template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> 
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
