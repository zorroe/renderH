<template>
  <div class="w-full flex justify-center gap-4">
    <button @click="renderH1">添加Success</button>
    <button @click="renderH2">添加Warning</button>
    <button @click="renderH3">添加Info</button>
    <button @click="renderH4">添加Error</button>
    <button @click="isShowDialog = true">dialog</button>
  </div>
  <Dialog
    :show="isShowDialog"
    @confirm="handleConfirm"
    @cancel="handleCancel"
    confirm-type="primary">
    <div class="w-full h-full">
      body
    </div>
    </Dialog>
</template>

<script setup lang="ts">
import { message } from './components/message'
import Dialog from './components/dialog/dialog.vue'
import { ref } from 'vue'

const isShowDialog = ref(false)

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

const handleConfirm = () => {
  isShowDialog.value = false
}

const handleCancel = () => {
  isShowDialog.value = false
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
./components/message
