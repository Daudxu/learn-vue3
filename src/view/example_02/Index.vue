<script>
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title)
    return {
        title: props.title
    }
  }
}
</script>

<template>
   
</template>

<style lang="stylus" scoped>

</style>
