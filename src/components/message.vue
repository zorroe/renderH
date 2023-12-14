<template>
  <Transition
    enter-active-class="animate__animated meslideInDown"
    leave-active-class="animate__animated meslideOutUp"
  >
    <div
      class="rounded border-s-4 px-4 py-2"
      :class="'bg-' + props.type"
      v-if="visible"
    >
      <p class="text-sm" :class="'msg-' + props.type">
        {{ props.message }}
      </p>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { removeInstance } from "./index";

interface Props {
  message?: string;
  type?: string;
  duration?: number;
  id?: string;
}

const visible = ref(false);

const props = withDefaults(defineProps<Props>(), {
  message: "",
  type: "success",
  duration: 4500,
});

onMounted(() => {
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
  setTimeout(() => {
    removeInstance(props.id);
  }, props.duration + 600);
});
</script>
<style>
.bg-success {
  @apply border-green-500 bg-green-50;
}

.bg-warning {
  @apply border-yellow-500 bg-yellow-50;
}

.bg-info {
  @apply border-gray-500 bg-gray-50;
}

.bg-error {
  @apply border-red-500 bg-red-50;
}

.msg-success {
  @apply text-green-700;
}

.msg-warning {
  @apply text-yellow-700;
}

.msg-info {
  @apply text-gray-700;
}

.msg-error {
  @apply text-red-700;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
  }
}

.meslideInDown {
  animation-name: slideInDown;
}

@keyframes slideOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}

.meslideOutUp {
  animation-name: slideOutUp;
}
</style>
