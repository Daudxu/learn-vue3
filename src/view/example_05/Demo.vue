<script>
export default {
    name:"Demo",
    props:['msg', 'school'],
    emits: ["hello"],
    setup(props, context){
      console.log(props)
      console.log(context.attrs)
      function test(){
        context.emit('hello', context)
      }

      return { test }
    },
    mounted(){
        // console.log(this)
    }
}
</script>

<template>
    <div>
        <p>Demo组件</p>
         <button @click="test">click</button>
    </div>
</template>