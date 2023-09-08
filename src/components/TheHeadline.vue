<template >
  <section>
    <h1>Lorem ipsum dolor sit.</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas?.</h2>
  </section>
</template>
<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      sample: "Hello"
    }
  },
  created() {
    console.log("Hey I am just created and my data", this.sample);
  }
}
</script>
