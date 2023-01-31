<script>
// ref 和 reactive
// ref 定义一个响应式的数据
// reactive 定义一个对象类型的响应式数据
import { h, ref, reactive } from 'vue'
export default {
  setup() {
    let title = ref("setup")
    let age = ref(18)
    let count = ref(0)

    let job = ref({
      type:"vue dev",
      salary: 25
    })
    let job1 = reactive({
      type:"vue dev",
      salary: 25
    })
    function addDom() {
        h('div', count.value)
    } 

    function cheageInfo(){
      job.value.type = "UI dec"
      job.value.salary = 60
    }

    return {
        title,
        age,
        addDom,
        job,
        cheageInfo
    }
  }
}
</script>

<template>
   <p>{{ title }}</p>
   <p>{{ age }}</p>
   <p>{{ job }}</p>
   <button @click="addDom">click</button>
</template>

<style lang="stylus" scoped>

</style>
