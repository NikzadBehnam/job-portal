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
import nextElementInList from "@/utils/nextElementInList.js"
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Build",
      interval: null,
      actions: ["Build", "Create", "Design", "Code"]
    }
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        this.action = nextElementInList(this.actions, this.action)
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