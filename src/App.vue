<template>
  <div class="w-screen h-screen flex">
    <div class="w-60 h-full overflow-y-auto border-r">
      <RouterLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path">
        <div class="mt-2 py-2 mx-2 text-center border shadow rounded">
          {{ route.name }}
        </div>
      </RouterLink>
    </div>
    <div class="flex-1 h-full flex flex-col items-center overflow-y-auto">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from './router'
</script>

<style scoped></style>
