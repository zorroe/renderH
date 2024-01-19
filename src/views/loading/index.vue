<template>
  <div>
    <button @click="handleLoading">显示</button>
    <div
      v-loading2="loading"
      class="h-40 w-80 mt-10 flex justify-center items-center border rounded-xl">
      loading
    </div>
    <div
      v-loading="loading"
      class="h-40 w-80 mt-10 flex justify-center items-center border rounded-xl">
      loading
    </div>
    <div
      v-loading="loading"
      class="h-40 w-80 mt-10 flex justify-center items-center border rounded-xl">
      loading
    </div>
  </div>
</template>

<script setup lang="ts">
import { Transition, ref } from 'vue'
import type { DirectiveBinding } from 'vue'
import { h, render } from 'vue'

const loading = ref(false)
const timer = ref()

const vLoading2 = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {},
  updated(el: HTMLElement, binding: DirectiveBinding) {
    console.log(binding)
    if (binding.value == true) {
      showLoading(el)
    } else {
      closeLoading(el)
    }
  },
}

const showLoading = (el: HTMLElement) => {
  const flag = 'load-' + new Date().getTime()
  el.setAttribute('flag', flag)
  const { width, height, left, top } = el.getBoundingClientRect()
  const props = {
    id: flag,
    class: 'fixed z-[9999] bg-black',
    style: {
      width: width + 'px',
      height: height + 'px',
      left: left + 'px',
      top: top + 'px',
    },
  }

  const vnode = h(Transition, { name: 'fade' }, [h('div', props)])
  const loadingWrapper = document.createElement('div')
  loadingWrapper.id = flag
  el.appendChild(loadingWrapper)
  render(vnode, loadingWrapper)
}

const closeLoading = (el: HTMLElement) => {
  const id = el.getAttribute('flag')
  el.removeAttribute('flag')
  const self = document.querySelector(`#${id}`)
  self?.remove()
}

const handleLoading = () => {
  if (timer.value) {
    return
  }
  loading.value = true
  timer.value = setTimeout(() => {
    loading.value = false
    clearTimeout(timer.value)
    timer.value = null
  }, 4500)
}
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>
