<template>
  <input type="text" :value="value" @input="handleInput" class="w-full text-lg font-normal focus:outline-none">
</template>
<script>
export default {
  name: "TextInput",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    handleInput($event) {
      this.$emit("value-updated", $event.target.value)
    }
  }
}
</script>
