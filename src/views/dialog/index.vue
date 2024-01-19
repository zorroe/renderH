<template>
  <div>
    <div class="w-full flex justify-center gap-4">
      <button @click="isShowDialog = true">dialog</button>
    </div>
    <Dialog
      :show="isShowDialog"
      @confirm="handleConfirm"
      @cancel="handleCancel"
      confirm-type="primary">
      <div class="w-full h-full">body</div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Dialog from '../../components/dialog/dialog.vue'
import { ref } from 'vue'

const isShowDialog = ref(false)

const handleConfirm = () => {
  isShowDialog.value = false
}

const handleCancel = () => {
  isShowDialog.value = false
}
</script>

<style scoped>
</style>
