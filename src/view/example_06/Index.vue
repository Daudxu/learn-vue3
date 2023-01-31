<template>
   <p>{{ person.name }}</p>
   <p>{{ person.age }}</p>
   <p v-show="person.sex">{{ person.sex }}</p>
   <button @click="addSex">添加一个sex属性</button>
   <button @click="deleteName">删除name属性</button>
   <button @click="updateHobby">修改第一个属性</button>
</template>

<script>

export default {
  name:'App',
  data() {
    return {
      person: {
        name: "张三",
        age: 18,
        hobby: ["学习", "吃饭"]
      }
    }
  },
  methods: {
    addSex(){
      this.$set(this.person, "sex", "女")
    },
    deleteName(){
      this.$delete(this.person, "sex", "女")
    },
    updateHobby(){
      this.$set(this.person.hobby, 0, "逛街")
    }
  }
}
</script>