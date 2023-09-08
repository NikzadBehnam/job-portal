<template >
  <section>
    <h1><span :class="actionClasses">{{ action }}</span> ipsum dolor sit.</h1>
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
  computed: {
    actionClasses() {
      return {
        build: this.action === "Build",
        create: this.action === "Create",
        design: this.action === "Design",
        code: this.action === "Code",
      }
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

<style scoped>
.build{
  color: #1a73e8;
}

.create{
  color: #34a853;
}

.design{
  color: #f9ab00;
}

.code{
  color: #d93025;
}
</style>