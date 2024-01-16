<template>
  <Transition
    enter-active-class="meFadeIn"
    leave-active-class="meFadeOut"
    mode="out-in">
    <div
      v-show="show"
      class="fixed left-0 top-0 z-[9999] flex justify-center items-center bg-black bg-opacity-20 w-full h-full">
      <div
        :style="{
          minWidth: '500px',
          minHeight: '300px',
          maxHeight: '90%',
          width: width ? width : '500px',
          height: height ? height : '300px',
        }"
        class="border rounded-lg flex flex-col p-2 shadow bg-white">
        <div
          v-show="title"
          class="px-4 text-xl font-medium">
          {{ title }}
        </div>
        <div class="flex-1 px-4 py-1 overflow-y-auto">
          <slot></slot>
        </div>
        <div class="w-full flex justify-center gap-12">
          <div
            v-show="showConfirm"
            class="flex justify-center items-center px-8 py-2 border rounded shadow cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
            :class="confirmType + '-btn'"
            @click="handleConfirm">
            确定
          </div>
          <div
            v-show="showCancel"
            class="flex justify-center items-center px-8 py-1 border rounded shadow cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 antialiased"
            @click="handleCancel">
            取消
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">

const emit = defineEmits(['confirm', 'cancel'])

interface Props {
  show: boolean
  width?: number | string
  height?: number | string
  title?: string
  showConfirm?: boolean
  showCancel?: boolean
  confirmText?: string
  confirmType?: 'primary' | 'danger'
}

const props = withDefaults(defineProps<Props>(), {
  width: '40%',
  height: '50%',
  showHeader: true,
  title: '',
  showConfirm: true,
  showCancel: true,
  confirmText: '确定',
  confirmType: 'primary',
})

const handleConfirm = () => {
  emit('confirm')
}

const handleCancel = () => {
  emit('cancel')
}
</script>

<style scoped>
.primary-btn {
  @apply bg-green-500 text-white;
}

.meFadeIn {
  animation-name: fadeIn;
  animation-duration: 200ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.meFadeOut {
  animation-name: fadeOut;
  animation-duration: 200ms;
}
</style>
