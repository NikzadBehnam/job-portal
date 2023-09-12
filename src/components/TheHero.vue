<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 ">
      <div class="grid grid-cols-12 ">
        <div class="col-span-1 col-start-1 border border-gray-700">
          1 col
        </div>
        <div class="col-span-5 col-start-2 border border-gray-700">
          <the-headline />
          <job-search-form />
        </div>
        <div class="self-center col-span-5 col-start-7 border border-gray-700 justify-self-center">
          <!-- https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png -->
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="Vue Logo" class="object-contain h-80 w-80">
        </div>
        <div class="col-span-1 col-start-12 border border-gray-700">
          1 col
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import JobSearchForm from './JobSearchForm.vue';
import TheHeadline from './TheHeadline.vue';
export default {
  name: "TheHero",
  components: {
    TheHeadline,
    JobSearchForm
  }
}
</script>
