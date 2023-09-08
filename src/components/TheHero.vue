<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-yellow-200">
      <div class="grid grid-cols-12 ">
        <div class="col-span-1 col-start-1 border border-gray-700">
          1 col
        </div>
        <div class="col-span-5 col-start-2 border border-gray-700">
          <the-headline />
        </div>
        <div class="col-span-5 col-start-7 border border-gray-700">
          3 col
        </div>
        <div class="col-span-1 col-start-12 border border-gray-700">
          4 col
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import TheHeadline from './TheHeadline.vue';
export default {
  name: "TheHero",
  components: {
    TheHeadline
  }
}
</script>
