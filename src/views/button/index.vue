<template>
  <div>
    <Button type="primary" icon="material-symbols:10k">primary</Button>
    <Button icon="material-symbols:10k" round></Button>
    <Button type="warning" disabled>warning</Button>
    <Button icon="material-symbols:14mp-outline" type="primary" round></Button>
    <Button>default</Button>
  </div>
</template>

<script setup lang="ts">
import Button from '../../components/button/button.vue'
</script>

<style scoped></style>
