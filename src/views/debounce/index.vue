<template>
  <div>
    <div>使用自定义指令实现防抖</div>
    <el-button v-debounce="['click', handleClick1, 1000]">指令防抖</el-button>
    <div>指令防抖：{{ debounceTimes }}</div>
    <div class="h-10"></div>
    <div>使用vueuse防抖</div>
    <el-button @click="debounceClick"> vueuse防抖 </el-button>
    <div>vueuse防抖：{{ debounceTimes }}</div>
    <div class="h-10"></div>
    <div>使用自定义指令实现节流</div>
    <el-button v-throttle="['click', handleClick2, 1000]">指令节流</el-button>
    <div>指令节流：{{ throttleTimes }}</div>
    <div class="h-10"></div>
    <div>使用自定义指令实现节流</div>
    <el-button @click="throttleClick">vueuse节流</el-button>
    <div>vueuse节流：{{ throttleTimes }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDebounceFn, useThrottleFn } from '@vueuse/core'

const debounceTimes = ref(0)
const throttleTimes = ref(0)

const vDebounce = {
  mounted: (el: HTMLElement, binding) => {
    let [eventType, fn, bounceTime]: [string, Function, number] = binding.value
    if (!bounceTime) {
      bounceTime = 2000
    }
    let timer
    el.addEventListener(eventType, event => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn.apply(this)
      }, bounceTime)
    })
  },
}

const vThrottle = {
  mounted: (el: HTMLElement, binding) => {
    let [eventType, fn, throttleTime]: [string, Function, number] =
      binding.value
    if (!throttleTime) {
      throttleTime = 2000
    }
    let timer
    el.addEventListener(eventType, event => {
      if (!timer) {
        fn.apply(this)
        timer = setTimeout(() => {
          clearTimeout(timer)
          timer = null
        }, throttleTime)
      }
    })
  },
}

const handleClick1 = () => {
  debounceTimes.value += 1
}

const handleClick2 = () => {
  throttleTimes.value += 1
}

const debounceClick = useDebounceFn(() => {
  handleClick1()
}, 1000)

const throttleClick = useThrottleFn(() => {
  handleClick2()
}, 1000)
</script>

<style scoped></style>
