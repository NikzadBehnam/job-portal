<template >
  <section>
    <h1>{{ action }} ipsum dolor sit.</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas?.</h2>
  </section>
</template>
<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Build",
      interval: null
    }
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"]
        const curActionIndex = actions.indexOf(this.action)
        const nextActionIndex = (curActionIndex + 1) % 4; // 4 % 4 is 0
        const nextAction = actions[nextActionIndex]
        this.action = nextAction

      }, 3000);
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  created() {
    this.changeTitle()
  }
}
</script>
