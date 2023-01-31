<template>
   <p></p>
   <Demo  msg="test" @hello="showHelloMsg" school="web3Dev"> >
      <template v-slot:sasa>
         <h1> slot</h1>
      </template>
  </Demo>
</template>

<script>
import Demo from "./Demo.vue"
export default {
  name:'App',
  components:{Demo},
  setup(){
    function showHelloMsg(){
      alert("父组件事件")
    }
    return { showHelloMsg }
  }
}
</script>