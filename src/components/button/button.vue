<template>
  <span :class="cls">
    <Icon
      v-if="$props.icon"
      :icon="props.icon"></Icon>
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { buildCls, Props } from './index'

defineOptions({
  name: 'HlButton',
})

const props = withDefaults(defineProps<Partial<Props>>(), {
  type: 'default',
  tag: 'button',
  icon: '',
  disabled: false,
  round: false
})

const cls = computed(() => {
  console.log(props)
  return buildCls(props)
})
</script>

<style scoped>
@import url('./button.css');
</style>
