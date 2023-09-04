<template>
  <button :class="{ primary: true }">{{ text }}</button>
</template>
<script>
export default {
  name: 'ActionButton',
  props: ['text']
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply border-0 bg-brand-gray-1 text-white hover:shadow-blue
}
</style>
