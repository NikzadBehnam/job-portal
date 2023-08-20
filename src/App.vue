<template>
  <header>
    <div class="wrapper">
      <h1>Hello, This is App.vue</h1>
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  <main>
    <TheWelcome />
  </main>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: {
    HelloWorld,
  }
}
</script>

