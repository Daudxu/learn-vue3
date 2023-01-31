<script>
import { h, ref } from 'vue'

export default {
  setup() {
    let title = "setup"
    let age = 18

    const count = ref(0)
    function addDom() {
        h('div', count.value)
    } 
    return {
        title,
        age,
        addDom
    }
  }
  

}
</script>

<template>
   <p>{{ title }}</p>
   <p>{{ age }}</p>
   <button @click="addDom">click</button>
</template>

<style lang="stylus" scoped>

</style>
