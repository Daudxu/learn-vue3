<script setup>

</script>
<template>
  <div class="home">
    <div class="home-title">
      learn vue3 notes
    </div>
    <div class="notes-list">
      <router-link to="/example01">初始setup</router-link>
      <router-link to="/example02">ref 和 reactive</router-link>
      <router-link to="/example03">vue2 响应式原理</router-link>
      <router-link to="/example04">vue3 响应式原理</router-link>
      <router-link to="/example05">setup 两个注意点</router-link>
      <router-link to="/example06">example06</router-link>
      <router-link to="/example07">example07</router-link>
      <router-link to="/example08">example08</router-link>
      <router-link to="/example09">example09</router-link>
      <router-link to="/example10">example10</router-link>
    </div>

  </div>
</template>

<style lang="stylus" scoped>
.home 
  text-align: center
  .home-title
    padding: 1.875rem
  .notes-list a
    display: flex
    align-items: center
    justify-content: center
    padding: .3125rem
</style>