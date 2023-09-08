<template >
  <section>
    <h1 class="font-bold tracking-tighter mb-14 text-8xl"><span :class="actionClasses">{{ action
    }} <br> </span>
      ipsum
      dolor
      sit.</h1>
    <h2 class="text-3xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas?.</h2>
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
        [this.action.toLocaleLowerCase()]: true
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