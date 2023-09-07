<template>
  <div class="w-full h-full bg-white border-b border-solid border-x-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div>
        <!-- <font-awesome-icon :icon="['fas', 'search']" /> -->
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="mr-3 font-light" />
        <span><span class="text-brand-green-1">1653</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheSubnav",
  props: {
    isLoggedIn: {
      default: false,
    }
  },
}
</script>
<style lang="">
  
</style>