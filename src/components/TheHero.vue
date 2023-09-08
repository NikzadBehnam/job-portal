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
        <div class="col-span-5 col-start-7 border border-gray-700">
          5 col
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
