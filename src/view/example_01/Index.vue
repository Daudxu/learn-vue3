<script>
// setup是vue3中的一个新的配置项，值为一个函数，我们在组件中用到的数据、方法等等，都要配置在setup中。

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
