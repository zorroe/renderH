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
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from './router'
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
