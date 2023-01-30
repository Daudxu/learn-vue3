<script setup>
import { ref, onMounted, onUpdated, onUnmounted  } from 'vue'
import Web3 from 'web3'
import usePoint from '../../hooks/usePoint'

const count = ref(0)
let point = usePoint();

</script>

<template>
  <button id="count" @click="count++">{{ count }}</button>
  <h1>X: {{point.x}} ------ Y: {{ point.y }}</h1>
</template>
