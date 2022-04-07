<template>
    <div>A </div>
   <div> 名字：{{user.name}} </div>
   <div> 年龄：{{user.age}} </div>
   <div> 媳妇：{{user.wife}} </div>
    <button @click="updateUser">更新数据</button>
</template>
<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name:"App",
  setup() {
    const user = reactive({
      name:"小红",
      age:28,
      wife:{
        name:"小甜甜",
        age:18,
        cars: ['benchi','baoma', 'aodi']
      },
    });

    const updateUser = () => {
      user.name = 'wangwu'
    }

    return{
      user,
      updateUser
    }
  },
})
</script>

