<template>
    {{count}}
    <button @click="updateCount">点击 </button>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const count = ref(0)
        console.log(count)

        function updateCount(){
             count.value++
        }

        return {
            count,
            updateCount
        }
    },
})
</script>
