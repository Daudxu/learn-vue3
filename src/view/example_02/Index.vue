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

    function cheageInfo1(){
      job1.type = "UI dec"
      job1.salary = 60
    }

    return {
        title,
        age,
        addDom,
        job,
        job1,
        cheageInfo,
        cheageInfo1
    }
  }
}
</script>

<template>
   <p>{{ title }}</p>
   <p>{{ age }}</p>
   <p>{{ job }}</p>
   <p>{{ job1 }}</p>
   <button @click="addDom">click</button>
   <button @click="cheageInfo">cheageInfo</button>
   <button @click="cheageInfo1">cheageInfo1</button>
</template>

<style lang="stylus" scoped>

</style>
