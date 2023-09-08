<template>
  <div class="flex flex-col">
    <main-nav />
    <the-hero class="mt-16" />
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import TheHero from '@/components/TheHero.vue';
export default {
  name: 'app',
  components: {
    MainNav,
    TheHero
  }
}
</script>
