<script name="Demo" setup>
// import { reactive } from "@vue/reactivity";
import { toRefs, reactive } from "vue";
    const person = {...toRefs(reactive({
        name:"zhangsan",
        age:18,
        job: {
            j1: {
                salary: 20
            }
        }
	 }))}

     const { name, age, job } = toRefs(person)

</script>

<template>
    <h1>name:{{ name }}</h1>
    <h1>age:{{ age }}</h1>
    <h1>salary:{{ job.j1.salary }}</h1>
    <button @click="name+='~'"> edit name</button>
    <button @click="age++"> age add</button>
    <button @click="job.j1.salary++"> salary add</button>
</template>