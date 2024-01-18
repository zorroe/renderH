<template>
  <Child v-model:btn-name="btnName"·></Child>
  <el-button>{{ btnName }}</el-button>
</template>

<script setup lang="ts">
import Child from './child.vue'
import { ref } from 'vue'

const btnName = ref('按钮')
</script>

<style scoped></style>
