<template>
  <div class="w-full flex justify-center gap-4">
    <button @click="renderH1">添加Success</button>
    <button @click="renderH2">添加Warning</button>
    <button @click="renderH3">添加Info</button>
    <button @click="renderH4">添加Error</button>
  </div>
</template>

<script setup lang="ts">
import { message } from '../../components/message/index'

const renderH1 = () => {
  message({ message: '测试success', type: 'success' })
}
const renderH2 = () => {
  message({ message: '测试warning', type: 'warning' })
}
const renderH3 = () => {
  message({ message: '测试info', type: 'info' })
}
const renderH4 = () => {
  message({ message: '测试error', type: 'error' })
}
</script>

<style scoped></style>
