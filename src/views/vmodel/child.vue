<template>
  <el-button @click="handleClick">
    {{ buttonName }}
  </el-button>
</template>

<script setup lang="ts">
const buttonName = defineModel('btnName', { required: true })

const handleClick = () => {
  buttonName.value = buttonName.value + '-'
}
</script>

<style scoped></style>
