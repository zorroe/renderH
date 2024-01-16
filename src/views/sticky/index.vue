<template>
  <div
    class="bg-white py-1 my-1"
    v-for="i in 30">
    {{ i }}
  </div>
  <div
    class="bg-white h-8"
    v-sticky:top="20">
    sticky1---------sticky1
  </div>
  <div
    class="bg-white py-1 my-1"
    v-for="i in 30">
    {{ i }}
  </div>
  <div
    class="bg-white h-8"
    v-sticky>
    sticky2---------sticky2
  </div>
  <div
    class="bg-white py-1 my-1"
    v-for="i in 30">
    {{ i }}
  </div>
</template>

<script setup lang="ts">
const vSticky = {
  mounted: (el, binding) => {
    el.style.position = 'sticky'
    console.log(el, binding)
    if (binding.arg == 'top' && binding.value) {
      el.style.top = binding.value + 'px'
    } else {
      el.style.top = '0px'
    }
  },
}
</script>

<style scoped></style>
