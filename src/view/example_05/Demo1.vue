<script>
export default {
    name:"Demo",
    props:['msg', 'school'],
    mounted(){
        console.log(this)
    }
}
</script>

<template>
    <div>
        <p>Demo组件</p>
        <slot></slot>
    </div>
</template>